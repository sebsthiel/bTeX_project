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

        //TODO: private services right?
        IWebHostEnvironment environment;
        public TexCompilerService CompilerService;
        public TexParserService ParserService;
        public BibParserService BibService;
        public JsonCreaterService JsonService;
        private MultiTexService MultiService;

        public PdfController(
            IWebHostEnvironment environment,
            TexCompilerService compilerService,
            TexParserService texParserService,
            BibParserService bibService,
            JsonCreaterService jsonService,
            MultiTexService multiService)
        {
            this.environment = environment;
            CompilerService = compilerService;
            ParserService = texParserService;
            BibService = bibService;
            JsonService = jsonService;
            MultiService = multiService;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(IFormFile file, string mainName)
        {

            string pdfPath;

            string texFile = "";

            Console.WriteLine("POST REQUEST");

            

            var userId = Guid.NewGuid();

            var guid = new ContentResult
            {
                Content = "{\"guid\" :" + "\"" + userId + "\"}",
                ContentType = "application/json"
            };


            long size = file.Length;
            if (size <= 0) return null;

            // creating paths and directory for the new files that will be saved
            var projectName = userId;//Path.GetFileNameWithoutExtension(file.FileName);
            Console.WriteLine("project name: " + projectName);
            string texDir = Path.Combine(new string[] {environment.ContentRootPath, "papers", "tex", projectName+"", " "}).Trim(); 
            //environment.ContentRootPath + "/papers/tex/" + projectName + "/";
            string zipDir = Path.Combine(new string[] { environment.ContentRootPath, "papers", "zips", projectName + "", " " }).Trim();
            //environment.ContentRootPath + "/papers/zips/" + projectName + "/";
            string pdfDir = Path.Combine(new string[] { environment.ContentRootPath, "papers", "pdfs", projectName + "", " " }).Trim();
            //environment.ContentRootPath + "/papers/pdfs/" + projectName + "/";
            string jsonDir = Path.Combine(new string[] { environment.ContentRootPath, "papers", "jsons", projectName + "", " " }).Trim();
            //environment.ContentRootPath + "/papers/jsons/" + projectName + "/";
            Directory.CreateDirectory(texDir);
            Directory.CreateDirectory(zipDir);
            Directory.CreateDirectory(pdfDir);
            Directory.CreateDirectory(jsonDir);


            string zipFile = zipDir + file.FileName;

            Console.WriteLine(file.ContentType);

            // checking for zip
            if (file.ContentType == "application/zip" || file.ContentType == "application/x-zip-compressed")
            {
                // save zip file and unzip at zipDir location
                TexCompilerService.DeleteContentInDir(zipDir);
                using (var stream = System.IO.File.Create(zipFile))
                {
                    Console.WriteLine("ZipFile: " + zipFile);
                    await file.CopyToAsync(stream);
                }
                TexCompilerService.DeleteContentInDir(texDir);
                ZipFile.ExtractToDirectory(zipFile, texDir);


                //TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
                var texFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.TopDirectoryOnly);
                if (texFiles.Length > 1)
                {
                    Console.WriteLine("MORE THAN 1 TEX");
                    foreach(string v in texFiles){

                        if (Path.GetFileNameWithoutExtension(v) == "main")
                        {
                            texFile = v;
                            break;

                        }
                    }
                    
                }
                else
                {
                    texFile = texFiles[0];
                }
               
                //Console.WriteLine("TexFile: " + texFile);


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
            //ParserService.ParseTex(texFile);

            var tmpFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.AllDirectories);

            /***********ADD MultiTexService here****************/
            //TODO: maybe add a sort of default value if that is possible in c#
            if (mainName == null)
                mainName = "";
            string allTexFilesAsString = MultiService.ScanMultipleFiles(tmpFiles, mainName);
            ParserService.ParseTex(allTexFilesAsString);
                
            //foreach (string v in tmpFiles)
            //{
            //    Console.WriteLine("Should parse: " + v);
            //    ParserService.ParseTexFromFile(v);
            //}

            



            //Create Jsonfile for d3.js
            var nodes = ParserService.GetNodes().Values.ToList();
            var links = ParserService.GetLinks();
            var environments = ParserService.GetEnvs().Values.ToList();


            var dagNodes = makeDagNodes(ParserService.GetNodes(), links);

           // JsonService.CreateDagJson(dagNodes, "/Users/sebs/Code/6Semester/Bachelor/Codebase/bTeX_project/Hermes/Hermes.Website/tester/some.json");
            JsonService.CreateJsonFile(nodes, links, environments, jsonDir + "some.json");




           

            await Task.Delay(2000);
            return guid;
            //FileStream pdf = new FileStream(pdfPath, FileMode.Open);
            //return new FileStreamResult(pdf, "application/pdf");




        }


        [HttpPost]
        [Route("pdf")]
        public IActionResult PostFileAsync(string guid)
        {
            Console.WriteLine("HALLO _-------_______---_-_--_: ");
            string pdfDir = environment.ContentRootPath + "/papers/pdfs/" + guid + "/";

            var pdfPath = Directory.GetFiles(pdfDir, "*.pdf", SearchOption.TopDirectoryOnly)[0];
            Console.WriteLine("pdfPath: " + pdfPath);
            FileStream pdf = new FileStream(pdfPath, FileMode.Open);
            return new FileStreamResult(pdf, "application/pdf");
        }


        [HttpPost]
        [Route("json")]
        public IActionResult PostJsonAsync(string guid)
        {
            string jsonDir = environment.ContentRootPath + "/papers/jsons/" + guid + "/";

            var jsonPath = Directory.GetFiles(jsonDir, "*.json", SearchOption.TopDirectoryOnly)[0];

            FileStream jsonFile = new FileStream(jsonPath, FileMode.Open);
            return new FileStreamResult(jsonFile, "application/json");
        }



        private List<DagNode> makeDagNodes(Dictionary<string, Node> nodes, List<Link> links)
        {
            Dictionary<string, DagNode> dNodes = new Dictionary<string, DagNode>();
            Dictionary<string, string> toId = new Dictionary<string, string>();
            int idCounter = -1;
            foreach (Link link in links)
            {
                //TODO: Write better code
                if (!dNodes.ContainsKey(link.source))
                {
                    idCounter++;
                    toId[link.source] = idCounter + "";
                    dNodes[link.source] = new DagNode(idCounter + "");
                }
                if (!dNodes.ContainsKey(link.target))
                {
                    idCounter++;
                    toId[link.target] = idCounter + "";
                    dNodes[link.target] = new DagNode(idCounter + "");
                }
                if (!dNodes[link.target].parentIds.Contains(toId[link.source]))
                    dNodes[link.target].addParent(toId[link.source]);

            }

            return dNodes.Values.ToList();
        }















    }
}
