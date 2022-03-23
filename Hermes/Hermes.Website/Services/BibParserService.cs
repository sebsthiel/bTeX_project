using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using BibtexLibrary;
using imbSCI.BibTex;
using Hermes.Website.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

using imbSCI.Core.extensions.text;
using imbSCI.Core.style.preset;
using imbSCI.Data.enums.fields;
using imbSCI.DataComplex.data;
using imbSCI.DataComplex.extensions.data.formats;
using imbSCI.DataComplex.tables;
using System;
using System.Data;
using System.Drawing;
using System.IO;

namespace Hermes.Website.Services
{
    public class BibParserService : TestMicroEnvironmentBase
    {
        public BibParserService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        public String testString = "**TestString Defined in BibParserService**";

        public void ParseBib()
        {

            /*BibtexFile f = BibtexLibrary.BibtexImporter.FromString(@"@book{ aaker:1981a,
                                                                      author = {David A. Aaker},
                                                                      title = {Multivariate Analysis in Marketing},
                                                                      edition = {2},
                                                                      publisher = {The Scientific Press},
                                                                      year = {1981},
                                                                      address = {Palo Alto},
                                                                      topic = {multivariate-statistics;market-research;}
                                                                     }");
            //imbSCI.BibTex.
            foreach (BibtexEntry entry in f.Entries)
            {
                Console.WriteLine(entry.Tags["author"]);
            }*/

        }

        /*public async Task<List<PaperNode>> NewParseBibAsync(IFormFile uploadFile)
        {
            Console.WriteLine("Hello from BibParserService!");
            BibTexDataFile bib_1 = new BibTexDataFile("papers/bib/test.bib");
            //BibTexDataFile bib_2 = uploadFile;
            // Converting BibTex data into object model dictionary
            BibTexCollection<BibTexEntryModel> model = bib_1.ConvertToModel<BibTexEntryModel>(log);
            Console.WriteLine("Bib1 : " + bib_1.name);
            //Console.WriteLine("Bib1 2 : " + bib_1);

            // Printing [Author : Title] to a ILogBuilder log builder
            foreach (var pair in model)
            {
                Console.WriteLine("*pair*");
                log.log(pair.author.or("Unknown") + ": " + pair.title);
            }
            Console.WriteLine("LogContent: " + log.logContent);
            
        }*/


        public async Task<List<PaperNode>> ParseBibAsync(IFormFile uploadFile)
        {
            string fileAsString = await ReadAsStringAsync(uploadFile);
            List<PaperNode> paperNodes = makePaperNode(fileAsString);

            return paperNodes;
        }

        private List<PaperNode> makePaperNode(string fileString)
        {
            List<PaperNode> paperNodes = new List<PaperNode>();
            BibtexFile f = BibtexImporter.FromString(fileString);
            foreach (BibtexEntry entry in f.Entries)
            {
                PaperNode pn = new PaperNode(entry.Key, Guid.NewGuid(), "paper", entry.Type, entry.Tags["TITLE"]);
                paperNodes.Add(pn);
            }
            return paperNodes;
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


