using System;
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
    public class BibParserService
    {
        
        public BibParserService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        public string testString = "BibParserSevice Test String";

        /*
        auther, title, note, journal, fjournal, volume, year, pages, issn, mrclass, mrnumber, 
        mrreviewer, doi, url, key, organization, publisher, series, booktitle, 
            */

        List<Node> paperList = new List<Node>();

        public async Task<List<Node>> ParseBibFile(string filePath) 
        {

            string fileAsString = await System.IO.File.ReadAllTextAsync(filePath); //ReadAsStringAsync(file);
            List<Node> paperNodes = SearchFile(fileAsString);
            return paperNodes;
        }

        private List<Node> SearchFile(string fileAsText)
        {
            string pattern = @"(@(?<type>article|manual|book|incollection) *{(?<id>[^,]+),)|( *(?<artInfo>[^ \n]*) *= *({|""|)(?<artInfoValue>.*)(}|""),?)";
            Regex rx = new Regex(pattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
            MatchCollection matches = rx.Matches(fileAsText);
            PaperNode currentPaper = null;
            
            currentPaper = null;
            
            foreach (Match match in matches)
            {
                Console.WriteLine("Match: " + match);
                GroupCollection groups = match.Groups;
                string artInfo = groups["artInfo"].Value.ToLower();
                string paperId = groups["id"].Value;
                string paperType = groups["type"].Value;


                string artInfoValue = groups["artInfoValue"].Value;
                
                if (paperId != null && paperId != "")
                {
                    Console.WriteLine("PaperID: " + paperId);
                    if (currentPaper != null){ paperList.Add(currentPaper);}
                    currentPaper = new PaperNode(paperId, "BibFile", "Paper");
                }
                if (paperType != null && paperType != "") 
                {
                    currentPaper.paperType = paperType;
                }
                if (artInfo != null && artInfo != "")
                {
                    Console.WriteLine("Art Info is: " + artInfo);
                    switch (artInfo)
                    {
                        case "title":
                            currentPaper.title = artInfoValue;
                            break;
                        case "author":
                            currentPaper.author = artInfoValue;
                            break;
                        case "note":
                            currentPaper.note = artInfoValue;
                            break;
                        case "journal":
                            currentPaper.journal = artInfoValue;
                            break;
                        case "fjournal":
                            currentPaper.fJournal = artInfoValue;
                            break;
                        case "volume":
                            currentPaper.volume = artInfoValue;
                            break;
                        case "year":
                            currentPaper.year = artInfoValue;
                            break;
                        case "pages":
                            currentPaper.pages = artInfoValue;
                            break;
                        case "issn":
                            currentPaper.issn = artInfoValue;
                            break;
                        case "mrclass":
                            currentPaper.mrClass = artInfoValue;
                            break;
                        case "mrnumber":
                            currentPaper.mrNumber = artInfoValue;
                            break;
                        case "mrreviewer":
                            currentPaper.mrReviewer = artInfoValue;
                            break;
                        case "doi":
                            currentPaper.doi = artInfoValue;
                            break;
                        case "url":
                            currentPaper.url = artInfoValue;
                            break;
                        case "key":
                            currentPaper.key = artInfoValue;
                            break;
                        case "organization":
                            currentPaper.organization = artInfoValue;
                            break;
                        case "publisher":
                            currentPaper.publisher = artInfoValue;
                            break;
                        case "series":
                            currentPaper.series = artInfoValue;
                            break;
                        case "booktitle":
                            currentPaper.booktitle = artInfoValue;
                            break;
                        case "month":
                            currentPaper.month = artInfoValue;
                            break;
                        case "number":
                            currentPaper.number = artInfoValue;
                            break;
                        case "isbn":
                            currentPaper.isbn = artInfoValue;
                            break;
                        default:
                            //Console.WriteLine(artInfo + " doesn't match any cases");
                            break;

                    }
                    
                }
                
                
            }
            if (currentPaper != null) { paperList.Add(currentPaper); }
            return paperList;
        }
       

        public static async Task<string> ReadAsStringAsync(IFormFile file)
        {
            var result = new StringBuilder();
            using (var reader = new StreamReader(file.OpenReadStream()))
            {
                while (reader.Peek() >= 0)
                    result.AppendLine(await reader.ReadLineAsync());
            }
            return result.ToString();
        }

    }

}


