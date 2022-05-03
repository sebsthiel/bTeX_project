﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Hermes.Website.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;



namespace Hermes.Website.Services
{
    public class BBLParserService
    {

        public BBLParserService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        public string testString = "BibParserSevice Test String";

        /*
        auther, title, note, journal, fjournal, volume, year, pages, issn, mrclass, mrnumber, 
        mrreviewer, doi, url, key, organization, publisher, series, booktitle, 
            */

        

        public async Task<List<Node>> ParseBBLFile(string filePath)
        {
            string fileAsString = await System.IO.File.ReadAllTextAsync(filePath);
            List<Node> paperNodes = SearchFile(fileAsString);
            return paperNodes;
        }


        private List<Node> SearchFile(string fileAsText)
        { 
            string pattern = @"(\\(?<bibitem>bibitem)(\[(?<bibArg1>[^\]]*)\])?({(?<bibArg2>[^}]*)})(\n)?(?<author>(.|(\n  ))*))|((\\newblock)(?<description>(.|(\n  ))*))"; 
            Regex rx = new Regex(pattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
            MatchCollection matches = rx.Matches(fileAsText);
            BBLNode currentPaper = null;
            List<Node> paperList = new List<Node>();

            string outerEnv = "BBL";

            foreach (Match match in matches)
            {
                GroupCollection groups = match.Groups;
                string bibItem = groups["bibitem"].Value;
                string author = groups["author"].Value;
                string description = groups["description"].Value;

                if (bibItem == "bibitem")
                {
                    string arg1 = groups["bibArg1"].Value;
                    string arg2 = groups["bibArg2"].Value;
                    if (currentPaper != null)
                        paperList.Add(currentPaper);
                    
                    string name = arg2;
                    if (arg2 == "")
                        name = arg1;
                    //TODO: figure out what to do with linecount within BBL files
                    Console.WriteLine("bblName: "+ name.ToLower());
                    currentPaper = new BBLNode(name.ToLower(), "BBL", outerEnv, -1);
                    //Console.WriteLine("tester " + name.ToLower());
                }
                if (author != "")
                {
                    currentPaper.author = author;
                }
                if (description != "")
                {
                    currentPaper.information.Add(description);
                }

            }
            if (currentPaper != null)
                paperList.Add(currentPaper);
            return paperList;
        }

    }

}


