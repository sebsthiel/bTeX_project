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
        
        public void ParseTex(string pathToTex)
        {
            envTypeDict.Add("section", sectionEnv);

            //Console.WriteLine("PATH: " + pathToTex);




            // Go through file
            string text = System.IO.File.ReadAllText(pathToTex);

            string pattern = @"\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)})|(?<newtheorem>newtheorem)(?<envName>({.+?}))(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?";
            //@"\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<newtheorem>newtheorem)(?<envName>{.+?})(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?";
            RegexOptions options = RegexOptions.Multiline;
            Console.WriteLine("START PARSING");
            
            
            foreach (Match match in Regex.Matches(text, pattern, options))
            {
                
                Node node1;
                GroupCollection groups = match.Groups;
                //Console.WriteLine("MATCH: " + match);
                if(groups["type"].Value == "section")
                {

                    EnvNode newEnvNode = new EnvNode(groups["typeName"].Value, outerEnv, groups["type"].Value, envTypeDict["section"].counter);

                    UpdateCounters("section");

                    createdAt = groups["typeName"].Value;

                    //var createdAtName = groups["typeName"].Value;
                    //createdAt = nodeDict[createdAtName].GetName();

                    //add section to dict
                    nodeDict.Add(newEnvNode.GetName(), newEnvNode);
                }
                else if (groups["type"].Value.StartsWith("sub"))
                {
                    // Check how many sub
                    var subCountSubsection = subCount(groups["type"].Value);
                    var subCountCreatedAt = subCount(nodeDict[createdAt].GetType());
                    EnvNode newSubSection = null;

                    if(subCountSubsection == subCountCreatedAt)
                    {
                        // same sub amount
                        newSubSection = new EnvNode(groups["typeName"].Value, nodeDict[createdAt].GetCreatedAt(), groups["type"].Value, envTypeDict[groups["type"].Value].counter);
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
                            envTypeDict[createdAtType].AddToCounterShouldReset(groups["type"].Value);
                        }


                        newSubSection = new EnvNode(groups["typeName"].Value, createdAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter);

                        // updateCounters
                        UpdateCounters(groups["type"].Value);
                        createdAt = newSubSection.GetName();


                    }
                    else
                    {
                        //mindre

                        var differenceInSubCount = (subCountCreatedAt - subCountSubsection);

                        var newCreatedAt = subSection2Section(createdAt, differenceInSubCount);
                        newSubSection = new EnvNode(groups["typeName"].Value, newCreatedAt, groups["type"].Value, envTypeDict[groups["type"].Value].counter);

                        UpdateCounters(groups["type"].Value);

                        createdAt = newCreatedAt;

                    }

                    nodeDict[groups["typeName"].Value] = newSubSection;

                }
                else if (groups["type"].Value == "label")
                {
                    node1 = new Node(groups["typeName"].Value, createdAt, groups["type"].Value);
                    nodeDict[node1.name] = node1;
                    

                }
                else if (groups["type"].Value == "ref")
                {

                    Link link = new Link(createdAt, groups["typeName"].Value, "ref");
                    linksList.Add(link);
                }
                else if (groups["type"].Value.StartsWith("cite"))
                {
                    //throw new Exception("Not implemented -> test when parsed bib");
                    Link link = new Link(createdAt, groups["typeName"].Value, "cite");
                    //TODO linksList.Add(link);
                }
                else if (groups["type"].Value == "begin")
                {
                    
                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(groups["typeName"].Value))){
                        continue;
                    }

                    var thisEnvCount = CalTotalCount(createdAt) + envTypeDict[groups["typeName"].Value].counter;

                    var newEnvNodeName = groups["typeName"].Value + " " + thisEnvCount;

                    // TODO what do we do about counter?? should it be string or what?
                    //var newEnvNode = new EnvNode(newEnvNodeName, createdAt, groups["typeName"].Value, thisEnvCount);
                    //Console.WriteLine(groups["type"].Value + " " + groups["typeName"].Value );
                    var newEnvNode = new EnvNode(newEnvNodeName, createdAt, groups["typeName"].Value, envTypeDict[groups["typeName"].Value].counter);

                    nodeDict[newEnvNodeName] = newEnvNode;

                    //update counter
                    UpdateCounters(groups["typeName"].Value);

                    createdAt = newEnvNodeName;
                    
                }
                else if (groups["type"].Value == "end")
                {

                    // make sure that stuff like enumerate isnt created as a node
                    if (!(envTypeDict.ContainsKey(groups["typeName"].Value)))
                    {
                        continue;
                    }

                    if (createdAt != outerEnv)
                    {
                        createdAt = nodeDict[createdAt].GetCreatedAt();
                    }
                    
                }   
                if (groups["bibitem"].Value == "bibitem")
                {
                    
                    string arg1 = groups["bibArg1"].Value;
                    string arg2 = groups["bibArg2"].Value;
                    //Console.WriteLine("bibitem has arguments: " + arg1 + " & " + arg2);
                    PaperNode pNode = new PaperNode(arg2, createdAt, "paper");
                    if (arg1 != "") 
                    { 
                        if(arg1.Contains(System.Environment.NewLine))
                        {
                            Console.WriteLine("Title contains newline");
                        }
                        pNode.title = arg1.Replace(System.Environment.NewLine," ");
                    } 
                    nodeDict[pNode.name] = pNode;
                     

                }
                    // Creating EnvType from the newtheorem command

                if (groups["newtheorem"].Value == "newtheorem")
                {
                    
                    string envName = groups["envName"].Value.Trim(new char[]{'{', '}'});
                    string arg2 = groups["arg2"].Value;
                    string arg3 = groups["arg3"].Value;

                    string envText;
                    string counterName;
                    if (arg2.StartsWith('{'))
                    {
                        envText = arg2.Trim(new char[] { '{', '}' });

                        //TODO is arg3 in this case always []?
                        counterName = arg3.Trim(new char[] { '[', ']' });

                        if (envTypeDict.ContainsKey(counterName))
                        {
                            envTypeDict[counterName].AddToCounterShouldReset(envName);
                        }
                        else
                        {
                            throw new Exception("ENVIRONMENT that is referenced as counter does NOT exists 1 " + counterName + " " + arg3);
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



            foreach (var key in nodeDict.Keys){
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
    }
}
