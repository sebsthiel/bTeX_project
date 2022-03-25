using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using Hermes.Website.Services;
using Hermes.Website.Models;
using System.Text.Json;
using Newtonsoft.Json;

namespace Hermes.Website.Pages
{
    public class BibParserModel : PageModel
    {

        IWebHostEnvironment environment;

        public BibParserService BibService;

        public BibParserModel(
            IWebHostEnvironment environment,
            BibParserService bibService)
        {
            this.environment = environment;
            BibService = bibService;
           
        }

        public string UploadFilePath { get; set; }
       
        public void OnGet()
        {
            Console.WriteLine("Got BibParserPage");
            //BibService.NewParseBibAsync();
            Console.WriteLine("Done Parsing file");
            
        }


        public async Task OnPostUploadAsync(IFormFile uploadFile)
        {
            Console.WriteLine("Posted Someting in BibParser");

            List<PaperNode> paperNodes = await BibService.ParseBibFile(uploadFile);
            //List<PaperNode> paperNodes = await BibService.ParseBibAsync(uploadFile);
            //PrintPaperNodes(paperNodes);

            //string json = JsonConvert.SerializeObject(paperNodes.ToArray(), Formatting.Indented);
            //System.IO.File.WriteAllText(@"papers\bib\test.json", json);
            PrintPaperNodes(paperNodes);
        }

        private void PrintPaperNodes(List<PaperNode> paperNodes)
        {
            foreach (PaperNode node in paperNodes)
            {
                Console.WriteLine("============================");
                Console.WriteLine("|ID   | " + node.getName());
                Console.WriteLine("|TYPE | " + node.paperType);
                Console.WriteLine("|TITLE| " + node.title);
                
            }
        }

    }

} 

