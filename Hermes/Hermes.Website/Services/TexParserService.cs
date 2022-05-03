using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Hermes.Website.Models;
using Microsoft.AspNetCore.Hosting;

namespace Hermes.Website.Services
{
    public class TexParserService
    {
        public TexParserService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
            outerEnv = "DOCUMENT"; //ID_Generator.GenerateID();
            createdAt = outerEnv;

            ID_Generator.resetIDs();
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        Dictionary<string, Env> envTypeDict = new Dictionary<string, Env>();

        Dictionary<string, Node> nodeDict = new Dictionary<string, Node>();

        HashSet<string> labelPrefixes = new HashSet<string>();

        List<Link> linksList = new List<Link>();

        string outerEnv;
        string createdAt;
        EnvNode prevSection = null;

        int lineCount = 0;
        bool inComment = false;


        Env sectionEnv = new Env("section", "section", 1, new List<string>(), new List<string>());
        
        public void ParseTexFromFile(string pathToTex)
        {
            string text = System.IO.File.ReadAllText(pathToTex);
            
            ParseTex(text);
        }

        public void ParseTex(string text)
        {
            //Andreas added ifstatement
            if (!envTypeDict.ContainsKey("section"))
                envTypeDict.Add("section", sectionEnv);

            // Go through file
            string pattern = @"(?<comment>([^\\]|\n)%)|((re)?(?<newcommand>newcommand)(\\[^{]*)?({.+})?(\[.*\])?){(?<newcommandlines>.*(\n.*)*)}|\\((?<type>((\w*)?ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?)){(?<typeName>.+)})|((?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)}))|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?|(?<newLine>\n)";
            //string pattern = @"(?<comment>([^\\]|\n)%)|((?<newcommand>newcommand)({.+})?(\[.*\])?){(?<newcommandlines>(\n.*)*)}|\\((?<type>((\w*)?ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?)){(?<typeName>.+)})|((?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)}))|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?|(?<newLine>\n)";
            //@"(?<comment>(([^\\]|\n)%)|\\renewcommand)|\\((?<type>((\w*)?ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?)){(?<typeName>.+)})|((?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)}))|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?|(?<newLine>\n)";
            //@"(?<comment>([^\\]|\n)%)|\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+)})|((?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)}))|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?|(?<newLine>\n)";

            RegexOptions options = RegexOptions.Multiline;
            //Console.WriteLine("START PARSING");


            foreach (Match match in Regex.Matches(text, pattern, options))
            {
                GroupCollection groups = match.Groups;

                if (groups["comment"].Value.EndsWith("%"))
                {
                    inComment = true;
                    //comments can contain 1 newline, so we have to check
                    if (groups["comment"].Value.Contains("\n"))
                        lineCount++;
                }
                    
                if (groups["newLine"].Value == "\n")
                {
                    inComment = false;
                    lineCount++;
                }
                
                if (groups["newcommand"].Value == "newcommand") 
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["newcommandlines"].Value);
                    ParseTex(remainingString);
                    //You haven't tested this yet Andreas
                }
                
                if (inComment)
                    continue;

                if (groups["type"].Value == "section")
                {
                   

                    //Console.WriteLine("TypeName: " + groups["typeName"].Value);
                    (string typeNameWithoutRefs,string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    if (nodeDict.ContainsKey(typeNameWithoutRefs))
                    {
                        //Console.WriteLine("ID");
                        typeNameWithoutRefs = typeNameWithoutRefs + " : ID : " + ID_Generator.GenerateID();
                        //Console.WriteLine("typeNameWithoutRefs" + typeNameWithoutRefs);
                    }
                    EnvNode newEnvNode = new EnvNode(typeNameWithoutRefs, outerEnv, groups["type"].Value, envTypeDict["section"].counter, lineCount);
                    //Console.WriteLine("Counter for " + groups["type"].Value + ": " + envTypeDict["section"].counter);
                    UpdateCounters("section");


                    createdAt = typeNameWithoutRefs; //groups["typeName"].Value;

                    //var createdAtName = groups["typeName"].Value;
                    //createdAt = nodeDict[createdAtName].GetName();

                    //add section to dict
                    //Console.WriteLine("Adding section: " + newEnvNode.GetName());
                    nodeDict.Add(newEnvNode.GetName(), newEnvNode);

                    if (prevSection == null)
                    {
                        Console.WriteLine("prevSection IS NULL ");
                        prevSection = newEnvNode;
                    } else
                    {
                        SetLineCountEndForMissing(prevSection, newEnvNode.lineCount, 0, subCount(prevSection.type));
                        nodeDict[prevSection.name].lineCountEnd = newEnvNode.lineCount;
                        prevSection = newEnvNode;
                    }

                    //Checks if there are any more matches in the remaining typeName (i.e \section{something abc } \label{123})
                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value.StartsWith("sub"))
                {

                    // Check how many sub
                    //Console.WriteLine(groups["type"].Value + " : " + groups["typeName"].Value);
                    var subCountSubsection = subCount(groups["type"].Value);
                    var subCountCreatedAt = subCount(nodeDict[createdAt].GetType());
                    EnvNode newSubSection = null;
                    // SLET
                   
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    if (nodeDict.ContainsKey(typeNameWithoutRefs))
                    {
                        //Console.WriteLine("ID");
                        typeNameWithoutRefs = typeNameWithoutRefs + " :id: " + ID_Generator.GenerateID();
                        //Console.WriteLine("typeNameWithoutRefs" + typeNameWithoutRefs);
                    }

                    if (subCountSubsection == subCountCreatedAt)
                    {
                        // same sub amount
                        newSubSection = new EnvNode(typeNameWithoutRefs, nodeDict[createdAt].GetCreatedAt(), groups["type"].Value, envTypeDict[groups["type"].Value].counter, lineCount);
                        //Console.WriteLine("Counter for " + groups["type"].Value + ": " + envTypeDict[groups["type"].Value].counter);
                        UpdateCounters(groups["type"].Value);

                        if (prevSection == null)
                        {
                            Console.WriteLine("prevSection IS NULL ");
                            prevSection = newSubSection;
                        }
                        else
                        {
                            nodeDict[prevSection.name].lineCountEnd = newSubSection.lineCount;
                            //SetLineCountEndForMissing(prevSection, newSubSection.lineCount, subCountSubsection, subCount(prevSection.type));

                            prevSection = newSubSection;
                        }

                        //UpdateCounters(groups["type"].Value);

                        createdAt = newSubSection.GetName();
                    }
                    else if (subCountSubsection > subCountCreatedAt)
                    {
                        // større
                        // hvis ikke findes
                        if (!(envTypeDict.ContainsKey(groups["type"].Value)))
                        {
                            envTypeDict[groups["type"].Value] = new Env(groups["type"].Value, groups["type"].Value, 1, new List<string>(), new List<string>());
                            //Console.WriteLine("Counter for " + groups["type"].Value + ": (1)" + 1);

                            // should add it as dependent of createdAt (counter)
                            var createdAtType = nodeDict[createdAt].GetType();
                            if (createdAtType != null) // If DOCUMENT
                            {
                                envTypeDict[createdAtType].AddToCounterShouldReset(groups["type"].Value);
                            }

                        }


                        newSubSection = new EnvNode(typeNameWithoutRefs, createdAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter, lineCount);

                        if (prevSection == null)
                        {
                            prevSection = newSubSection;
                        }
                        else
                        {
                            prevSection = newSubSection;
                        }

                        // updateCounters

                        //Console.WriteLine("Counter for " + groups["type"].Value + ": " + envTypeDict[groups["type"].Value].counter);
                        UpdateCounters(groups["type"].Value);

                        createdAt = newSubSection.GetName();


                    }
                    else
                    {
                        //mindre
                        //Console.WriteLine("Subcount er mindre! ");
                        //Console.WriteLine("Name of section: " + typeNameWithoutRefs);


                        var differenceInSubCount = (subCountCreatedAt - subCountSubsection);
                        

                        var newCreatedAt = subSection2Section(createdAt, differenceInSubCount);
                        newSubSection = new EnvNode(typeNameWithoutRefs, newCreatedAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter, lineCount);

                        if (prevSection == null)
                        {
                            prevSection = newSubSection;
                        }
                        else
                        {
                            //Console.WriteLine("New sub: " + subCountSubsection);
                            //Console.WriteLine("New Name: " + typeNameWithoutRefs);
                            //Console.WriteLine("Prev sub: " + subCount(prevSection.type));
                            //Console.WriteLine("Prev Name: " + prevSection.name);
                            
                            SetLineCountEndForMissing(prevSection, newSubSection.lineCount, subCountSubsection, subCount(prevSection.type));
                            nodeDict[prevSection.name].lineCountEnd = newSubSection.lineCount;
                            prevSection = newSubSection;
                        }

                        //Console.WriteLine("Counter for " + groups["type"].Value + ": " + envTypeDict[groups["type"].Value].counter);
                        UpdateCounters(groups["type"].Value);

                        // WRONG CREATEDAT - skal være newNode
                        createdAt = newSubSection.name;

                    }
                    //Console.WriteLine("Adding subsection: " + newSubSection.GetName());
                    
                    nodeDict[typeNameWithoutRefs] = newSubSection;
                    
                    if (remainingString != "")
                        ParseTex(remainingString);

                }
                else if (groups["type"].Value == "label")
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    typeNameWithoutRefs = typeNameWithoutRefs.ToLower();
                    //Console.WriteLine("label before: " + typeNameWithoutRefs);
                    string labPattern = @"((?<prefix>\w*):)?(?<labelName>.*)";
                    MatchCollection labMatch = Regex.Matches(typeNameWithoutRefs, labPattern, options);
                    GroupCollection labGroups = labMatch[0].Groups;
                    string labelPrefix = labGroups["prefix"].Value;


                   // if (labelPrefix != "" && labelPrefix != "sec" && !labelPrefix.Contains("subsec"))
                    labelPrefixes.Add(labelPrefix);
                    
                    //Console.WriteLine("label after " + typeNameWithoutRefs);
                    Node node1 = new Node(typeNameWithoutRefs, createdAt, groups["type"].Value, lineCount);
                    nodeDict[node1.name] = node1;
                    //Console.WriteLine("Adding label: " + node1.GetName());

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value.EndsWith("ref"))
                {
                    
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    typeNameWithoutRefs = typeNameWithoutRefs.ToLower();
                    //Console.WriteLine("NAME: " + typeNameWithoutRefs + " REM: " + remainingString);
                    if (groups["type"].Value == "href")
                    {   //TODO make a refNode ref hyperlinkNode
                        Node hyperLinkNode = new Node(typeNameWithoutRefs, createdAt, "href", lineCount);
                        nodeDict[hyperLinkNode.name] = hyperLinkNode;
                    }
                    //Console.WriteLine("Adding ref: " + groups["typeName"].Value);

                   
                    var nodeId = ID_Generator.GenerateID().ToString();
                    var nodeName = "ref to " + typeNameWithoutRefs + " :id:" + nodeId;
                    Node node = new Node(nodeName, createdAt, "refNode", lineCount);
                    nodeDict.Add(nodeName, node);
                    Link link = new Link(nodeName, typeNameWithoutRefs, "ref");
                    linksList.Add(link);

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value.StartsWith("cite"))
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    typeNameWithoutRefs = typeNameWithoutRefs.ToLower();
                    var tmps = typeNameWithoutRefs.Split(',');
                    var nodeId = ID_Generator.GenerateID().ToString();
                    var nodeName = "citation to " + typeNameWithoutRefs + " :id:" + nodeId;
                    Node node = new Node(nodeName, createdAt, "citeNode", lineCount);

                    nodeDict.Add(nodeName, node);
                    foreach (string citation in tmps)
                    {
                        
                        
                        Link link = new Link(nodeName, citation.Trim(), "cite");
                        linksList.Add(link);

                    }

                    //throw new Exception("Not implemented -> test when parsed bib");
                    
                   

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value == "begin")
                {
                    //Console.WriteLine("BEGIN: " + groups["typeName"].Value);
                    //Console.WriteLine("PREV TYPENAME: " + groups["typeName"].Value);
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(typeNameWithoutRefs)))
                    {
                        //Console.WriteLine("Skipping over BEGIN: " + typeNameWithoutRefs);
                        if (remainingString != "")
                            ParseTex(remainingString);
                        continue;
                    }

                    var thisEnvCount = CalTotalCount(createdAt) + envTypeDict[typeNameWithoutRefs].counter;

                    var newEnvNodeName = typeNameWithoutRefs + " " + thisEnvCount;

                    //Console.WriteLine("EnvNode with count: " + newEnvNodeName);
                    // TODO what do we do about counter?? should it be string or what?
                    //var newEnvNode = new EnvNode(newEnvNodeName, createdAt, groups["typeName"].Value, thisEnvCount);
                    //Console.WriteLine(groups["type"].Value + " " + groups["typeName"].Value );
                    //Console.WriteLine("lineCount in begin: " + lineCount);
                    var newEnvNode = new EnvNode(newEnvNodeName, createdAt, typeNameWithoutRefs, envTypeDict[typeNameWithoutRefs].counter, lineCount);

                    //Console.WriteLine("Adding envNode: " + newEnvNode.GetName());
                    nodeDict[newEnvNodeName] = newEnvNode;

                    //update counter
                    //Console.WriteLine("Counter for " + typeNameWithoutRefs + ": " + envTypeDict[typeNameWithoutRefs].counter);
                    UpdateCounters(typeNameWithoutRefs);
                    

                    createdAt = newEnvNodeName;

                    //Console.WriteLine("TYPENAMEWITHOUTREFS: " + typeNameWithoutRefs);
                    //if (typeNameWithoutRefs == "align")
                        //Console.WriteLine("ALIGN: " + typeNameWithoutRefs + "REMAINGS: " + remainingString);
                    
                    if (remainingString != "") 
                        ParseTex(remainingString);

                }
                else if (groups["type"].Value == "end")
                {
                    
                    //Console.WriteLine("END: " + groups["typeName"].Value);
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    //TODO is this good?
                    if(typeNameWithoutRefs.ToLower() == "document")
                    {
                        SetLineCountEndForMissing(prevSection, lineCount, 0, subCount(prevSection.type));
                        nodeDict[prevSection.name].lineCountEnd = lineCount;
                    }
                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(typeNameWithoutRefs)))
                    {
                        //Console.WriteLine("Skipping over END: " + typeNameWithoutRefs);
                        continue;
                    }

                    EnvNode tmpNode = (EnvNode)nodeDict[createdAt];
                    tmpNode.lineCountEnd = lineCount;
                    //Console.WriteLine("Setting endLineCount: " + tmpNode.lineCountEnd);
                    nodeDict[createdAt] = tmpNode;

                    if (createdAt != outerEnv)
                    {

                        createdAt = nodeDict[createdAt].GetCreatedAt();
                    }


                    if (remainingString != "")
                        ParseTex(remainingString);

                }
                if (groups["bibitem"].Value == "bibitem")
                {

                    string arg1 = groups["bibArg1"].Value;
                    string arg2 = groups["bibArg2"].Value;
                    //Console.WriteLine("bibitem has arguments: " + arg1 + " & " + arg2);
                    PaperNode pNode = new PaperNode(arg2.ToLower(), createdAt, "paper", lineCount);
                    if (arg1 != "")
                    {
                        if (arg1.Contains(System.Environment.NewLine))
                        {
                            //Console.WriteLine("Title contains newline");
                        }
                        pNode.title = arg1.Replace(System.Environment.NewLine, " ");
                    }
                    //Console.WriteLine("Adding bibitem:" + pNode.name);
                    nodeDict[pNode.name] = pNode;


                }
                
                    // Creating EnvType from the newtheorem command
                if (groups["newtheorem"].Value == "newtheorem")
                {
                    
                    string envName = groups["envName"].Value.Trim(new char[] { '{', '}' });
                    string arg2 = groups["arg2"].Value;
                    string arg3 = groups["arg3"].Value;

                    //Console.WriteLine("NewTheorem: " + envName + " " + arg2 + " " + arg3);

                    string envText;
                    string counterName;
                    List<string> shouldUpdateList = new List<string>();

                    if (arg2.StartsWith('{'))
                    {
                        envText = arg2.Trim(new char[] { '{', '}' });

                        //TODO is arg3 in this case always []?
                        if(arg3 == "")
                        {
                            if(createdAt == outerEnv)
                            {
                                counterName = null;
                            }else
                            {
                                counterName = nodeDict[createdAt].GetType();
                            }
                            
                        }
                        else
                        {
                            counterName = arg3.Trim(new char[] { '[', ']' });
                        }

                        if(counterName == null)
                        {
                            //TODO Find a better way
                            Console.WriteLine("Handle exception better");
                        }
                        else if (envTypeDict.ContainsKey(counterName))
                        {
                            envTypeDict[counterName].AddToCounterShouldReset(envName);
                        }
                        else
                        {

                            throw new Exception($"{envName} \n ENVIRONMENT that is referenced as counter does NOT exists 1 " + counterName + " " + arg3);
                        }
                    }
                    else
                    {
                        envText = arg3.Trim(new char[] { '{', '}' });

                        //TODO is arg3 in this case always []?
                        counterName = arg2.Trim(new char[] { '[', ']' });

                        if (envTypeDict.ContainsKey(counterName))
                        {
                            //Console.WriteLine(counterName + " just got " + envName);
                            envTypeDict[counterName].AddToCounterShouldUpdate(envName);

                            shouldUpdateList.Add(counterName);
                            //envTypeDict[envName].AddToCounterShouldUpdate(counterName);
                        }
                        else
                        {
                            throw new Exception("ENVIRONMENT that is referenced as counter does NOT exists 2 " + counterName + " " + arg2);
                        }
                    }

                    //TODO Create smart constructer for env such that we dont have to pass 1, new list...
                    envTypeDict[envName] = new Env(envName, envText, 1, new List<string>(), shouldUpdateList);
                    //Console.WriteLine($"Added new Environment: {envName}");

                }
            }
        }

        private void SetLineCountEndForMissing(EnvNode prevSection, int currentLineCount, int currentSub, int subCount)
        {
           
            var subUpperName = prevSection.createdAt;
            for (int i = 0; i < subCount; i++)
            {
               
                nodeDict[subUpperName].lineCountEnd = currentLineCount;
                subUpperName = nodeDict[subUpperName].createdAt;
               
                if (!nodeDict.ContainsKey(subUpperName)){
                    break;
                }
            }
        }

        private string CalTotalCount(string createdAt)
        {
            var newCreatedAt = createdAt;
            string acc = "";
            while( nodeDict.ContainsKey( newCreatedAt))
            {
                //Console.WriteLine("NewCreatedAt: " +newCreatedAt);
                EnvNode t = (EnvNode)nodeDict[newCreatedAt];
                acc = t.counter + "." + acc;
                newCreatedAt = nodeDict[newCreatedAt].GetCreatedAt();
            }
            return acc;
        }


        private string subSection2Section(string createdAt, int differenceInSubCount)
        {
            var newCreatedAt = createdAt;
            for (int i = 0; i < differenceInSubCount; i++)
            {
                newCreatedAt = nodeDict[newCreatedAt].GetCreatedAt();
            }
            return nodeDict[newCreatedAt].GetCreatedAt();
        }

        //Returns how many times "sub" appears in the input string
        private int subCount(string section)
        {
            if(section == null)
            {
                return 0;
            }
            var regex = @"sub";
            return Regex.Matches(section, regex).Count;

        }

        private void UpdateCounters(string envName)
        {
            envTypeDict[envName].counter++;

            foreach (string e in envTypeDict[envName].countersShouldUpdate){
                envTypeDict[e].counter = envTypeDict[envName].counter;
                //Also updates the environments connected to the updated environments
                UpdateSecondHandEnvironments(e);
            }

            foreach (string e in envTypeDict[envName].countersShouldReset){
                envTypeDict[e].counter = 1;
            }

            
        }

        private void UpdateSecondHandEnvironments(string envName)
        {
            foreach (string e in envTypeDict[envName].countersShouldUpdate)
            {
                envTypeDict[e].counter = envTypeDict[envName].counter;
                
            }
        }

        public int GetLineCount()
        {
            return lineCount;
        }

        public Dictionary<string,Node> GetNodes()
        {
            return nodeDict;
        }

        public List<Link> GetLinks()
        {
            return linksList;
        }

        public Dictionary<string, Env> GetEnvs()
        {
            return envTypeDict;
        }

        public HashSet<string> GetPrefixes()
        {
            return labelPrefixes;
        }

        public void AddToNodeDict(List<Node> newNodes){

            foreach (Node node in newNodes)
            {
                // FIXME SEB ÆNDREDE da der i en bib fil var samme entry to gange xd
               
                if (!nodeDict.TryAdd(node.GetName(), node))
                {
                    Console.WriteLine("NODE ALREADY EXISTS");
                }
            }

        }

        //Only public for testing purposes pt.
        //Use String builder instead of += on string
        public (string, string) CheckForCommandsInName(string input)
        {
            //nameWithCommands is the actual name of the i.e. section, but still possibly with commands such as \texit{abc}
            //remainingString is the the string that follows the name (and is parsed later in the parseText method) i.e. section{abc} "label{}"
            (string nameWithCommands, string remainingString) = CountBrackets(input);

            //Check if there are any commands in the name such as \ref{} and parse them.
            ParseTex(nameWithCommands);

            //Remove whatever command was before the curly brackets I.e \texit{abc}
            //if (nameWithCommands == "align")
            //{
            //    Console.WriteLine("Begin: " + nameWithCommands + " REMAING: " + remainingString);
            //}
            return (RemoveCommand(nameWithCommands), remainingString);
        }
        public (string, string) CountBrackets(string input)
        {
            //lvl is used to check when we have reached the correct end-curlybracket of the typeName
            int lvl = 1;
            string tmp = "";
            for (int i = 0; i < input.Length; i++)
            {
                char c = input[i];
                if (c == '{')
                {
                    lvl++;
                }
                else if (c == '}')
                {
                    lvl--;
                    if (lvl == 0)
                    {
                        //return the actual typename (without brackets and so on)
                        //input[i..] is the remainder of the string, which could contain other latex elements
                        return (tmp, input[(i + 1)..] +'}');
                    }
                }
                tmp += c;
            }
            return (tmp, "");
        }

        //Removes any command such as \ref and \label and \texit from the actual name of the i.e section
        public string RemoveCommand(string command)
        {
            string tmp = "";
            bool isDeletingCommand = false;
            for (int i = command.Length - 1; i >= 0; i--)
            {
                char c = command[i];
                if (!isDeletingCommand)
                { 
                    if (c == '{')
                    {
                        isDeletingCommand = true;
                    }
                    else if (c != '$' && c != '}')
                        tmp += c;
                }
                
                if (c == '\\')
                {
                    isDeletingCommand = false;
                }
            }
            return Reverse(tmp);
        }

        //Reverses a string
        private static string Reverse(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }

    }
}
