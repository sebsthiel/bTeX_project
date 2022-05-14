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
            Env figEnv = new Env("figure", "fig", 0, new List<string>(), new List<string>());
            Env proof = new Env("proof", "proof", 0, new List<string>(), new List<string>());
            envTypeDict.TryAdd("figure", figEnv);
            envTypeDict.TryAdd("proof", proof);
        }

        public IWebHostEnvironment WebHostEnvironment { get; }


        // Global variables
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
            string pattern = @"(?<comment>([^\\]|\n)%)|((re)?(?<newcommand>newcommand)(\\[^{\n]*)?({.+})?(\[.*\])?){(?<newcommandlines>.*(\n.*)*)}|\\((?<type>((\w*)?ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?)){(?<typeName>.+)})|((?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)}))|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?|(?<newLine>\n)";
            RegexOptions options = RegexOptions.Multiline;
            foreach (Match match in Regex.Matches(text, pattern, options))
            {
                GroupCollection groups = match.Groups;

                if (groups["comment"].Value.EndsWith("%"))
                {
                    inComment = true;
                    //comments can contain 1 newline, so we have to check
                    AddNewlinesCount(groups["comment"].Value);
                    
                }
                    
                if (groups["newLine"].Value == "\n")
                {
                    inComment = false;
                    lineCount++;
                }
                
                if (groups["newcommand"].Value == "newcommand") 
                {
                    (string typeNameWithoutRefs, string remainingString) = CountBrackets(groups["newcommandlines"].Value);
                    AddNewlinesCount(typeNameWithoutRefs);
                    ParseTex(remainingString);
                   
                }
                
                if (inComment)
                    continue;

                if (groups["type"].Value == "section")
                {
                   
                    
                    (string typeNameWithoutRefs,string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    AddNewlinesCount(typeNameWithoutRefs);

                    if (nodeDict.ContainsKey(typeNameWithoutRefs))
                    {
                       
                        typeNameWithoutRefs = typeNameWithoutRefs + " : ID : " + ID_Generator.GenerateID();
                        
                    }
                    EnvNode newEnvNode = new EnvNode(typeNameWithoutRefs, outerEnv, groups["type"].Value, envTypeDict["section"].counter, lineCount);
                    UpdateCounters("section");


                    createdAt = typeNameWithoutRefs; 
                    nodeDict.Add(newEnvNode.name, newEnvNode);

                    if (prevSection == null)
                    {
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
                    var subCountSubsection = subCount(groups["type"].Value);
                    var subCountCreatedAt = subCount(nodeDict[createdAt].type);
                    EnvNode newSubSection = null;
                   
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    AddNewlinesCount(typeNameWithoutRefs);

                    if (nodeDict.ContainsKey(typeNameWithoutRefs))
                    {
                        
                        typeNameWithoutRefs = typeNameWithoutRefs + " :id: " + ID_Generator.GenerateID();
                       
                    }

                    if (subCountSubsection == subCountCreatedAt)
                    {
                        // same sub amount
                        newSubSection = new EnvNode(typeNameWithoutRefs, nodeDict[createdAt].createdAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter, lineCount);
                       
                        UpdateCounters(groups["type"].Value);

                        if (prevSection == null)
                        {
                            prevSection = newSubSection;
                        }
                        else
                        {
                            nodeDict[prevSection.name].lineCountEnd = newSubSection.lineCount;
                           

                            prevSection = newSubSection;
                        }

                      

                        createdAt = newSubSection.name;
                    }
                    else if (subCountSubsection > subCountCreatedAt)
                    {
                        // bigger
                        // if not exists
                        if (!(envTypeDict.ContainsKey(groups["type"].Value)))
                        {
                            envTypeDict[groups["type"].Value] = new Env(groups["type"].Value, groups["type"].Value, 1, new List<string>(), new List<string>());
                           
                            // should add it as dependent of createdAt (counter)
                            var createdAtType = nodeDict[createdAt].type;
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

                        UpdateCounters(groups["type"].Value);

                        createdAt = newSubSection.name;


                    }
                    else
                    {
                        //smaller
                        
                        var differenceInSubCount = (subCountCreatedAt - subCountSubsection);
                        

                        var newCreatedAt = subSection2Section(createdAt, differenceInSubCount);
                        newSubSection = new EnvNode(typeNameWithoutRefs, newCreatedAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter, lineCount);

                        if (prevSection == null)
                        {
                            prevSection = newSubSection;
                        }
                        else
                        {
                         
                            
                            SetLineCountEndForMissing(prevSection, newSubSection.lineCount, subCountSubsection, subCount(prevSection.type));
                            nodeDict[prevSection.name].lineCountEnd = newSubSection.lineCount;
                            prevSection = newSubSection;
                        }

                        UpdateCounters(groups["type"].Value);

                       
                        createdAt = newSubSection.name;

                    }
                   
                    
                    nodeDict[typeNameWithoutRefs] = newSubSection;
                    
                    if (remainingString != "")
                        ParseTex(remainingString);

                }
                else if (groups["type"].Value == "label")
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    AddNewlinesCount(typeNameWithoutRefs);

                    typeNameWithoutRefs = typeNameWithoutRefs.ToLower();
                  
                    string labPattern = @"((?<prefix>\w*):)?(?<labelName>.*)";
                    MatchCollection labMatch = Regex.Matches(typeNameWithoutRefs, labPattern, options);
                    GroupCollection labGroups = labMatch[0].Groups;
                    string labelPrefix = labGroups["prefix"].Value;


                    labelPrefixes.Add(labelPrefix);
                    
                  
                    Node node1 = new Node(typeNameWithoutRefs, createdAt, groups["type"].Value, lineCount);
                    nodeDict[node1.name] = node1;
                    

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value.EndsWith("ref"))
                {
                    
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    AddNewlinesCount(typeNameWithoutRefs);

                    typeNameWithoutRefs = typeNameWithoutRefs.ToLower();
                   
                    if (groups["type"].Value == "href")
                    {  
                        Node hyperLinkNode = new Node(typeNameWithoutRefs, createdAt, "href", lineCount);
                        nodeDict[hyperLinkNode.name] = hyperLinkNode;
                    }
                    

                   
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
                    AddNewlinesCount(typeNameWithoutRefs);

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

                   
                    
                   

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value == "begin")
                {
                   
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    AddNewlinesCount(typeNameWithoutRefs);

                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(typeNameWithoutRefs)))
                    {
                        
                       
                        if (remainingString != "")
                            ParseTex(remainingString);

                        

                        continue;
                    }

                    var thisEnvCount = CalTotalCount(createdAt) + envTypeDict[typeNameWithoutRefs].counter;

                    var newEnvNodeName = typeNameWithoutRefs + " " + thisEnvCount;

                   
                    var newEnvNode = new EnvNode(newEnvNodeName, createdAt, typeNameWithoutRefs, envTypeDict[typeNameWithoutRefs].counter, lineCount);

                    
                    nodeDict[newEnvNodeName] = newEnvNode;

                    //update counter
                    UpdateCounters(typeNameWithoutRefs);
                    

                    createdAt = newEnvNodeName;

                    
                    if (remainingString != "") 
                        ParseTex(remainingString);

                }
                else if (groups["type"].Value == "end")
                {
                    
                    
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    AddNewlinesCount(typeNameWithoutRefs);

                    
                    if (typeNameWithoutRefs.ToLower() == "document")
                    {
                        SetLineCountEndForMissing(prevSection, lineCount, 0, subCount(prevSection.type));
                        nodeDict[prevSection.name].lineCountEnd = lineCount;
                    }
                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(typeNameWithoutRefs)))
                    {
                        continue;
                    }

                    EnvNode tmpNode = (EnvNode)nodeDict[createdAt];
                    tmpNode.lineCountEnd = lineCount;
                   
                    nodeDict[createdAt] = tmpNode;

                    if (createdAt != outerEnv)
                    {

                        createdAt = nodeDict[createdAt].createdAt;
                    }


                    if (remainingString != "")
                        ParseTex(remainingString);

                }
                if (groups["bibitem"].Value == "bibitem")
                {

                    string arg1 = groups["bibArg1"].Value;
                    string arg2 = groups["bibArg2"].Value;
                    AddNewlinesCount(arg1);
                    AddNewlinesCount(arg2);
                  
                    PaperNode pNode = new PaperNode(arg2.ToLower(), createdAt, "paper", lineCount);
                    if (arg1 != "")
                    {
                        pNode.title = arg1.Replace(Environment.NewLine, " ");
                    }
                   
                    nodeDict[pNode.name] = pNode;


                }
                
                    // Creating EnvType from the newtheorem command
                if (groups["newtheorem"].Value == "newtheorem")
                {
                    
                    string envName = groups["envName"].Value.Trim(new char[] { '{', '}' });
                    string arg2 = groups["arg2"].Value;
                    string arg3 = groups["arg3"].Value;

                    

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
                                counterName = nodeDict[createdAt].type;
                            }
                            
                        }
                        else
                        {
                            counterName = arg3.Trim(new char[] { '[', ']' });
                        }

                        if(counterName == null)
                        {
                          
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

                       
                        counterName = arg2.Trim(new char[] { '[', ']' });

                        if (envTypeDict.ContainsKey(counterName))
                        {
                            
                            envTypeDict[counterName].AddToCounterShouldUpdate(envName);

                            shouldUpdateList.Add(counterName);
                            
                        }
                        else
                        {
                            throw new Exception("ENVIRONMENT that is referenced as counter does NOT exists 2 " + counterName + " " + arg2);
                        }
                    }

                   
                    envTypeDict[envName] = new Env(envName, envText, 1, new List<string>(), shouldUpdateList);
                   
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
               
                EnvNode t = (EnvNode)nodeDict[newCreatedAt];
                acc = t.counter + "." + acc;
                newCreatedAt = nodeDict[newCreatedAt].createdAt;
            }
            return acc;
        }


        private string subSection2Section(string createdAt, int differenceInSubCount)
        {
            var newCreatedAt = createdAt;
            for (int i = 0; i < differenceInSubCount; i++)
            {
                newCreatedAt = nodeDict[newCreatedAt].createdAt;
            }
            return nodeDict[newCreatedAt].createdAt;
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


        private void AddNewlinesCount(string line)
        {
            var regex = @"\n";
            lineCount += Regex.Matches(line, regex).Count;
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
               
               
                if (!nodeDict.TryAdd(node.name, node))
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
