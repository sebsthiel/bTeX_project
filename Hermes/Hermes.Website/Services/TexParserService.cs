﻿using System;
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
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        Dictionary<string, Env> envTypeDict = new Dictionary<string, Env>();

        Dictionary<string, Node> nodeDict = new Dictionary<string, Node>();

        List<Link> linksList = new List<Link>();

        string outerEnv;
        string createdAt;

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

            string pattern = @"\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+)})|(?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)})|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?";
            // Non-greedy:
            //\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)})|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?
            //@"\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<newtheorem>newtheorem)(?<envName>{.+?})(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?";
            
            RegexOptions options = RegexOptions.Multiline;
            Console.WriteLine("START PARSING");


            foreach (Match match in Regex.Matches(text, pattern, options))
            {


                GroupCollection groups = match.Groups;
                //Console.WriteLine("MATCH: " + match);
                if (groups["type"].Value == "section")
                {
                    //Console.WriteLine("TypeName: " + groups["typeName"].Value);
                    (string typeNameWithoutRefs,string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    EnvNode newEnvNode = new EnvNode(typeNameWithoutRefs, outerEnv, groups["type"].Value, envTypeDict["section"].counter);

                    UpdateCounters("section");

                    createdAt = typeNameWithoutRefs; //groups["typeName"].Value;

                    //var createdAtName = groups["typeName"].Value;
                    //createdAt = nodeDict[createdAtName].GetName();

                    //add section to dict
                    //Console.WriteLine("Adding section: " + newEnvNode.GetName());
                    nodeDict.Add(newEnvNode.GetName(), newEnvNode);

                    //Checks if there are any more matches in the remaining typeName (i.e \section{something abc } \label{123})
                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value.StartsWith("sub"))
                {
                    // Check how many sub
                    var subCountSubsection = subCount(groups["type"].Value);
                    var subCountCreatedAt = subCount(nodeDict[createdAt].GetType());
                    EnvNode newSubSection = null;


                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    if (subCountSubsection == subCountCreatedAt)
                    {
                        // same sub amount
                        newSubSection = new EnvNode(typeNameWithoutRefs, nodeDict[createdAt].GetCreatedAt(), groups["type"].Value, envTypeDict[groups["type"].Value].counter);
                        UpdateCounters(groups["type"].Value);

                        createdAt = newSubSection.GetName();
                    }
                    else if (subCountSubsection > subCountCreatedAt)
                    {
                        //større
                        // hvis ikke findes
                        if (!(envTypeDict.ContainsKey(groups["type"].Value)))
                        {
                            envTypeDict[groups["type"].Value] = new Env(groups["type"].Value, groups["type"].Value, 1, new List<string>(), new List<string>());

                            // should add it as dependent of createdAt (counter)
                            var createdAtType = nodeDict[createdAt].GetType();
                            if (createdAtType != null) // If DOCUMENT
                            {
                                envTypeDict[createdAtType].AddToCounterShouldReset(groups["type"].Value);
                            }

                        }


                        newSubSection = new EnvNode(typeNameWithoutRefs, createdAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter);

                        // updateCounters
                        UpdateCounters(groups["type"].Value);
                        createdAt = newSubSection.GetName();


                    }
                    else
                    {
                        //mindre

                        var differenceInSubCount = (subCountCreatedAt - subCountSubsection);

                        var newCreatedAt = subSection2Section(createdAt, differenceInSubCount);
                        newSubSection = new EnvNode(typeNameWithoutRefs, newCreatedAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter);

                        UpdateCounters(groups["type"].Value);

                        createdAt = newCreatedAt;

                    }
                    //Console.WriteLine("Adding subsection: " + newSubSection.GetName());
                    
                    nodeDict[typeNameWithoutRefs] = newSubSection;
                    
                    if (remainingString != "")
                        ParseTex(remainingString);

                }
                else if (groups["type"].Value == "label")
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    Node node1 = new Node(typeNameWithoutRefs, createdAt, groups["type"].Value);
                    nodeDict[node1.name] = node1;
                    //Console.WriteLine("Adding label: " + node1.GetName());

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value.EndsWith("ref"))
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);
                    if (groups["type"].Value == "href")
                    {
                        Node hyperLinkNode = new Node(typeNameWithoutRefs, createdAt, "href");
                        nodeDict[hyperLinkNode.name] = hyperLinkNode;
                    }
                    //Console.WriteLine("Adding ref: " + groups["typeName"].Value);
                    Link link = new Link(createdAt, typeNameWithoutRefs, "ref");
                    linksList.Add(link);

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value.StartsWith("cite"))
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    //throw new Exception("Not implemented -> test when parsed bib");
                    Link link = new Link(createdAt, typeNameWithoutRefs, "cite");
                    //TODO linksList.Add(link);

                    if (remainingString != "")
                        ParseTex(remainingString);
                }
                else if (groups["type"].Value == "begin")
                {
                    (string typeNameWithoutRefs, string remainingString) = CheckForCommandsInName(groups["typeName"].Value);

                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(typeNameWithoutRefs)))
                    {
                        continue;
                    }

                    var thisEnvCount = CalTotalCount(createdAt) + envTypeDict[typeNameWithoutRefs].counter;

                    var newEnvNodeName = typeNameWithoutRefs + " " + thisEnvCount;

                    // TODO what do we do about counter?? should it be string or what?
                    //var newEnvNode = new EnvNode(newEnvNodeName, createdAt, groups["typeName"].Value, thisEnvCount);
                    //Console.WriteLine(groups["type"].Value + " " + groups["typeName"].Value );
                    var newEnvNode = new EnvNode(newEnvNodeName, createdAt, typeNameWithoutRefs, envTypeDict[typeNameWithoutRefs].counter);

                    //Console.WriteLine("Adding envNode: " + newEnvNode.GetName());
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

                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(typeNameWithoutRefs)))
                    {
                        continue;
                    }

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
                    PaperNode pNode = new PaperNode(arg2, createdAt, "paper");
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

                    string envText;
                    string counterName;



                    if (arg2.StartsWith('{'))
                    {
                        envText = arg2.Trim(new char[] { '{', '}' });

                        //TODO is arg3 in this case always []?
                        if (arg3 == "")
                        {
                            if (createdAt == outerEnv)
                            {
                                counterName = null;
                            }
                            else
                            {
                                counterName = nodeDict[createdAt].GetType();
                            }

                        }
                        else
                        {
                            counterName = arg3.Trim(new char[] { '[', ']' });
                        }

                        if (counterName == null)
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
                            envTypeDict[counterName].AddToCounterShouldUpdate(envName);
                        }
                        else
                        {
                            throw new Exception("ENVIRONMENT that is referenced as counter does NOT exists 2 " + counterName + " " + arg2);
                        }
                    }


                    //TODO Create smart constructer for env such that we dont have to pass 1, new list...
                    envTypeDict[envName] = new Env(envName, envText, 1, new List<string>(), new List<string>());
                    //Console.WriteLine($"Added new Environment: {envName}");

                }

            }



            foreach (var key in nodeDict.Keys)
            {
                //Console.WriteLine(nodeDict[key].GetName());
            }

            Console.WriteLine("DONE PARSING");



        }

        private string CalTotalCount(string createdAt)
        {
            var newCreatedAt = createdAt;
            string acc = "";
            while( nodeDict.ContainsKey( newCreatedAt))
            {
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

        private int subCount(string section)
        {
            var regex = @"sub";
            return Regex.Matches(section, regex).Count;

        }

        private void UpdateCounters(string envName)
        {

            foreach (string e in envTypeDict[envName].countersShouldUpdate){
                envTypeDict[e].counter = envTypeDict[envName].counter;
            }

            foreach (string e in envTypeDict[envName].countersShouldReset){
                envTypeDict[e].counter = 1;
            }

            
        }


        public Dictionary<string,Node> GetNodes(){
            return nodeDict;
        }

        public List<Link> GetLinks(){
            return linksList;
        }


        public void AddToNodeDict(List<Node> newNodes){

            foreach (Node node in newNodes)
            {
                nodeDict.Add(node.GetName(),node);
            }

        }

        //Only public for testing purposes pt.
        //Use String builder instead of += on string
        private (string, string) CheckForCommandsInName(string input)
        {
            //nameWithCommands is the actual name of the i.e. section, but still possibly with commands such as \texit{abc}
            //remainingString is the the string that follows the name (and is parsed later in the parseText method) i.e. section{abc} "label{}"
            (string nameWithCommands, string remainingString) = CountBrackets(input);

            //Check if there are any commands in the name such as \ref{} and parse them.
            ParseTex(nameWithCommands);

            //Remove whatever command was before the curly brackets I.e \texit{abc}
            return (RemoveCommand(nameWithCommands), remainingString);
        }
        private (string, string) CountBrackets(string input)
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
                        return (tmp, input[(i+1)..]);
                    }
                }
                tmp += c;
            }
            return (tmp, "");
        }

        //Removes any command such as \ref and \label and \texit from the actual name of the i.e section
        private string RemoveCommand(string command)
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
