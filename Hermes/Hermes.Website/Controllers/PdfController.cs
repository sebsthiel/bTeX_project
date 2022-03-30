using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hermes.Website.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO.Compression;
using Hermes.Website.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hermes.Website.Controllers
{
    [Route("api/[controller]")]
    public class PdfController : Controller
    {

        IWebHostEnvironment environment;
        public TexCompilerService CompilerService;
        public TexParserService ParserService;
        public BibParserService BibService;
        public JsonCreaterService JsonService;



        public PdfController(
            IWebHostEnvironment environment,
            TexCompilerService compilerService,
            TexParserService texParserService,
            BibParserService bibService,
            JsonCreaterService jsonService)
        {
            this.environment = environment;
            CompilerService = compilerService;
            ParserService = texParserService;
            BibService = bibService;
            JsonService = jsonService;

        }

        private string pdfPath;

        private string texFile;

    
     
        [HttpPost]
        public async Task<IActionResult> PostAsync(IFormFile file)
        {
            Console.WriteLine("POST REQUEST");



            long size = file.Length;
            if (size <= 0) return null;

            // creating paths and directory for the new files that will be saved
            var projectName = Path.GetFileNameWithoutExtension(file.FileName);
            Console.WriteLine("project name: " + projectName);
            string texDir = environment.ContentRootPath + "/papers/tex/" + projectName + "/";
            string zipDir = environment.ContentRootPath + "/papers/zips/" + projectName + "/";
            string pdfDir = environment.ContentRootPath + "/papers/pdfs/" + projectName + "/";
            string jsonDir = environment.ContentRootPath + "/papers/jsons/" + projectName + "/";

            Directory.CreateDirectory(texDir);
            Directory.CreateDirectory(zipDir);
            Directory.CreateDirectory(pdfDir);
            Directory.CreateDirectory(jsonDir);


            string zipFile = zipDir + file.FileName;

            // checking for zip
            if (file.ContentType == "application/zip")
            {
                // save zip file and unzip at zipDir location
                TexCompilerService.DeleteContentInDir(zipDir);
                using (var stream = System.IO.File.Create(zipFile))
                {
                    await file.CopyToAsync(stream);
                }
                TexCompilerService.DeleteContentInDir(texDir);
                ZipFile.ExtractToDirectory(zipFile, texDir);


                //TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
                var texFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.TopDirectoryOnly);
                if (texFiles.Length > 1)
                {
                    Console.WriteLine("MORE THAN 1 TEX");
                }
                texFile = texFiles[0];
                Console.WriteLine("TexFile: " + texFile);


                // Parsing bibfile if there is a bib file
                // adding the new nodes to NodeDict
                var bibFiles = Directory.GetFiles(zipDir, "*.bib", SearchOption.TopDirectoryOnly);
                if (bibFiles.Length > 1)
                {
                    Console.WriteLine("MORE THAN 1 BIB");
                }
                if (bibFiles.Length != 0)
                {
                    List<Node> paperNodes = await BibService.ParseBibFile(bibFiles[0]);

                    // add to nodeDict
                    ParserService.AddToNodeDict(paperNodes);

                }


                Console.WriteLine("Done with UnZip and bib");
            }
            else
            {
                // Save single tex file
                string singleTexFile = texDir + file.FileName;
                using (var stream = System.IO.File.Create(singleTexFile))
                {
                    await file.CopyToAsync(stream);
                }
                texFile = singleTexFile;

            }



            // Compiling the texfile to pdf
            pdfPath = await CompilerService.CompileTexAsync(texDir, pdfDir, texFile);

            // Parsing tex to get dict of Nodes and list of Edges (links)
            ParserService.ParseTex(texFile);



            //Create Jsonfile for d3.js
            var nodes = ParserService.GetNodes().Values.ToList();
            var links = ParserService.GetLinks();
            JsonService.CreateJsonFile(nodes, links, jsonDir + "some.json");




            await Task.Delay(2000);
            FileStream pdf = new FileStream(pdfPath, FileMode.Open);
            return new FileStreamResult(pdf, "application/pdf");




        }





  









    }
}
