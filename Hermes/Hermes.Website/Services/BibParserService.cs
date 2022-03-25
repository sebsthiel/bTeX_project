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

        List<PaperNode> paperList = new List<PaperNode>();

        public async Task<List<PaperNode>> ParseBibFile(IFormFile file) 
        {
            string fileAsString = await ReadAsStringAsync(file);
            List<PaperNode> paperNodes = SearchFile(fileAsString);
            return paperNodes;
        }

        private List<PaperNode> SearchFile(string fileAsText)
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
                    currentPaper = new PaperNode(paperId, Guid.NewGuid(), "Paper");
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
        /*function searchFile(fileText)
        {
            

            let match = regex.exec(fileText);
                    let currentPaper = null;
                    do
                    {
                        if (match.groups.type != null)
                        {

                            //Adds the previous paper to the list
                            if (currentPaper != null) { paperList.push(currentPaper); }

                            //Creates new paper with type and ID
                            currentPaper = new paper(match.groups.type);
                            currentPaper.id = match.groups.id;

                            //console.log(`A new paper of type ${match.groups.type} with name/id ${match.groups.id} has been defined`);
                        }
                        else if (match.groups.artInfo != null)
                        {
                            //Adds the paper info (such as title, year etc) to the current paper with the value of the info
                            let artInfo = match.groups.artInfo.toLowerCase();
                            let artInfoValue = match.groups.artInfoValue;
                            switch (artInfo)
                            {
                                case "author":
                                    currentPaper.setAuthor(artInfoValue);
                                    break;
                                case "title":
                                    currentPaper.setTitle(artInfoValue);
                                    break;
                                case "note":
                                    currentPaper.setNote(artInfoValue);
                                    break;
                                case "journal":
                                    currentPaper.setJournal(artInfoValue);
                                    break;
                                case "fjournal":
                                    currentPaper.setFjournal(artInfoValue);
                                    break;
                                case "volume":
                                    currentPaper.setVolume(artInfoValue);
                                    break;
                                case "year":
                                    currentPaper.setYear(artInfoValue);
                                    break;
                                case "pages":
                                    currentPaper.setPages(artInfoValue);
                                    break;
                                case "issn":
                                    currentPaper.setISSN(artInfoValue);
                                    break;
                                case "mrclass":
                                    currentPaper.setMrClass(artInfoValue);
                                    break;
                                case "mrnumber":
                                    currentPaper.setMrNumber(artInfoValue);
                                    break;
                                case "mrreviewer":
                                    currentPaper.setMrReviewer(artInfoValue);
                                    break;
                                case "doi":
                                    currentPaper.setDOI(artInfoValue);
                                    break;
                                case "url":
                                    currentPaper.setURL(artInfoValue);
                                    break;
                                case "key":
                                    currentPaper.setKey(artInfoValue);
                                    break;
                                case "organization":
                                    currentPaper.setOrganization(artInfoValue);
                                    break;
                                case "publisher":
                                    currentPaper.setPublisher(artInfoValue);
                                    break;
                                case "series":
                                    currentPaper.setSeries(artInfoValue);
                                    break;
                                case "booktitle":
                                    currentPaper.setBookTitle(artInfoValue);
                                    break;
                                case "month":
                                    currentPaper.setMonth(artInfoValue);
                                    break;
                                case "number":
                                    currentPaper.setNumber(artInfoValue);
                                    break;
                                case "isbn":
                                    currentPaper.setISBN(artInfoValue);
                                    break;
                                default:
                                    //console.log(`${artInfo} doesn't match any cases`);
                            }
                            //console.log(`Paper ${currentPaper.id} has the ${artInfo} with value ${artInfoValue}`);

                        }


                    } while ((match = regex.exec(fileText)) !== null);
                    // Adds the last paper to the list
                    if (currentPaper != null) { paperList.push(currentPaper); }
                    console.log(paperList.length);
                    for (let i = 0; i < paperList.length; i++)
                    {
                        console.log(`PaperList[${ i}]: ${ paperList[i].id}`);
                }
            }
        }*/


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


