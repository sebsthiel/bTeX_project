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
using System.IO.Compression;
using System.Text.Json;
using Newtonsoft.Json;

namespace Hermes.Website.Pages
{
    public class PlaygroundModel2 : PageModel
    {

        IWebHostEnvironment environment;
        public TexCompilerService CompilerService;
        public TexParserService ParserService;
        public BibParserService BibService;
        public JsonCreaterService JsonService;



        public PlaygroundModel2(
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


        public FileStream pdf { get; set; }

        //public String testString {get; set; }

        //[BindProperty]
        public string UploadFilePath { get; set; }

        public void OnGet()
        {
            Console.WriteLine("HELLO");
        }


        public string PdfPath { get; set; }



        public async Task<IActionResult> OnPostUploadAsync(IFormFile uploadFile)
        {


            Console.WriteLine("POST Request in Playground2");
            long size = uploadFile.Length;

            if (size <= 0)
                return RedirectToPage("./Playground2");

            // creating paths and directory for the new files that will be saved
            var projectName = Path.GetFileNameWithoutExtension(uploadFile.FileName);
            Console.WriteLine("project name: " + projectName);
            string texDir = environment.ContentRootPath + "/papers/tex/" + projectName + "/";
            string zipDir = environment.ContentRootPath + "/papers/zips/" + projectName + "/";
            string pdfDir = environment.ContentRootPath + "/papers/pdfs/" + projectName + "/";
            string jsonDir = environment.ContentRootPath + "/papers/jsons/" + projectName + "/";

            Directory.CreateDirectory(texDir);
            Directory.CreateDirectory(zipDir);
            Directory.CreateDirectory(pdfDir);

            string zipFile = zipDir + uploadFile.FileName;

            // checking for zip
            if (uploadFile.ContentType == "application/zip")
            {
                TexCompilerService.DeleteContentInDir(zipDir);
                using (var stream = System.IO.File.Create(zipFile))
                {
                    await uploadFile.CopyToAsync(stream);
                }
                TexCompilerService.DeleteContentInDir(texDir);
                ZipFile.ExtractToDirectory(zipFile, texDir);


                //TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
                var texFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.TopDirectoryOnly);
                if (texFiles.Length > 1)
                {
                    Console.WriteLine("MORE THAN 1 TEX");
                }
                CompilerService.TexFile = texFiles[0];
                Console.WriteLine("TexFile: " + CompilerService.TexFile);


                // call bib parser
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
                string singleTexFile = texDir + uploadFile.FileName;
                using (var stream = System.IO.File.Create(singleTexFile))
                {
                    await uploadFile.CopyToAsync(stream);
                }
                CompilerService.TexFile = singleTexFile;

            }

            // -----------------------------------------

            // compiling the texfile to pdf
            await CompilerService.CompileTexAsync(texDir, pdfDir, "");
                
            PdfPath = CompilerService.GetPdf;

            // parsing tex to get dict of Nodes and list of Edges (links)
            ParserService.ParseTex(CompilerService.TexFile);

            //Create Jsonfile for graphQL
            var nodes = ParserService.GetNodes().Values.ToList();
            var links = ParserService.GetLinks();
            JsonService.CreateJsonFile(nodes, links, "");


            return RedirectToPage("./Playground2");
        }



    }
}

