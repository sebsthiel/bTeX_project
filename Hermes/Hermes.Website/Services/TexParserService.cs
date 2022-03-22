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
        }

        public IWebHostEnvironment WebHostEnvironment { get; }


        public void ParseTex(string pathToTex)
        {

            Console.WriteLine("PATH: " + pathToTex);
            
            Dictionary<string, Env> envTypeDict = new Dictionary<string, Env>();

            var outerEnv = Guid.Empty;
            Guid createdAt = outerEnv;

            Env sectionEnv = new Env("section", "section", 1, new List<string>(), new List<string>());
            envTypeDict.Add("section", sectionEnv);


            // Go through file
            string text = System.IO.File.ReadAllText(pathToTex);

            string pattern = @"\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<newtheorem>newtheorem)(?<envName>{.+?})(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?";
            RegexOptions options = RegexOptions.Multiline;
            Console.WriteLine("START PARSING");
            //Console.WriteLine(text);
            Console.WriteLine(text.Length);
            foreach (Match match in Regex.Matches(text, pattern, options))
            {
                Console.WriteLine("HEJSA");
                GroupCollection groups = match.Groups;
                if(groups["type"].Value == "section")
                {

                    EnvNode newEnvNode = new EnvNode(groups["typeName"].Value, outerEnv, groups["type"].Value, envTypeDict["section"].counter);
                    
                }



                // Creating EnvType from the newtheorem command

                if(groups["newtheorem"].Value == "newtheorem")
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
                    Console.WriteLine($"Added new Environment: {envName}");

                }



                
                

            }

            Console.WriteLine("DONE PARSING");




        }
    }
}
