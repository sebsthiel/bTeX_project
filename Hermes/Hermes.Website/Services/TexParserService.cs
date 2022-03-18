using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
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

            var outerEnv = Guid.NewGuid();
            Dictionary<string, Env> envTypeDict = new Dictionary<string, Env>();

            // Go through file
            string text = System.IO.File.ReadAllText(pathToTex);
            string pattern = @"\\((?<type>ref|label|begin|end|(sub)*section|cite?(p|t|author|year)?\*?){(?<typeName>.+?)})|(?<newtheorem>newtheorem)(?<envName>{.+?})(?<arg2>{.+?}|\[.+?\])(?<arg3>{.+?}|\[.+?\])?";
            RegexOptions options = RegexOptions.Multiline;

            foreach (Match match in Regex.Matches(text, pattern, options))
            {

                GroupCollection groups = match.Groups;
                if(match.Groups["type"].Value == "section")
                {

                    EnvNode newEnvNode = new EnvNode(groups["typeName"].Value, outerEnv, groups["type"].Value, envTypeDict["section"].counter);
                    
                }


                
            }




        }
    }
}
