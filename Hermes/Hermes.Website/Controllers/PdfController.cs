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
        public BBLParserService BblService;
        public JsonCreaterService JsonService;
        private MultiTexService MultiService;
        private LineCountService LineCountService;

        
        

        public PdfController(
            IWebHostEnvironment environment,
            TexCompilerService compilerService,
            TexParserService texParserService,
            BibParserService bibService,
            BBLParserService bblService,
            JsonCreaterService jsonService,
            MultiTexService multiService,
            LineCountService lineCountService)
        {
           
            this.environment = environment;
            CompilerService = compilerService;
            ParserService = texParserService;
            BibService = bibService;
            BblService = bblService;
            JsonService = jsonService;
            MultiService = multiService;
            LineCountService = lineCountService;
            
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(IFormFile file, string mainName)
        {
            int amountOfTexFiles = 0;
            string[] texFiles;

            string texFile = "";

            // generate userId by guid
            var userId = Guid.NewGuid();

            long size = file.Length;
            if (size <= 0) return null;

            // creating paths and directory for the new files that will be saved
            var projectName = userId;
            string texDir = Path.Combine(new string[] { environment.ContentRootPath, "papers", "tex", projectName + "", " " }).Trim();
            string zipDir = Path.Combine(new string[] { environment.ContentRootPath, "papers", "zips", projectName + "", " " }).Trim();
            string jsonDir = Path.Combine(new string[] { environment.ContentRootPath, "papers", "jsons", projectName + "", " " }).Trim();
          
            Directory.CreateDirectory(texDir);
            Directory.CreateDirectory(zipDir);
            Directory.CreateDirectory(jsonDir);


            string zipFile = zipDir + file.FileName;
                
            // checking for zip
        
            if (file.ContentType == "application/zip" || file.ContentType == "application/x-zip-compressed")
            {
                // save zip file and unzip at zipDir location
                TexCompilerService.DeleteContentInDir(zipDir);
                using (var stream = System.IO.File.Create(zipFile))
                {
                    await file.CopyToAsync(stream);
                    
                }
                Console.WriteLine("FILETYPE: " + file.ContentType);
                TexCompilerService.DeleteContentInDir(texDir);
                ZipFile.ExtractToDirectory(zipFile, texDir);

                // delete __macosx if exists as there is .tex file in it which we do not need
                var macosx = Path.Combine(texDir, "__MACOSX");
                    if(Directory.Exists(macosx)){
                        TexCompilerService.DeleteContentInDir(macosx);
                        Directory.Delete(macosx);
                    }


                // finding the main.tex file
                texFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.AllDirectories);
                amountOfTexFiles = texFiles.Length;
                if (amountOfTexFiles > 1)
                {
                    if(mainName != null && (mainName != ""))
                    {
                        Console.WriteLine("mainName: " + mainName == "");
                        texFile = Path.Combine(texDir, mainName);

                    }
                    else
                    {
                        foreach (string v in texFiles)
                        {

                            if (Path.GetFileNameWithoutExtension(v) == "main")
                            {
                                texFile = v;

                                break;

                            }
                        }

                    }
                    
                    

                }
                else
                {
                    //If there is only one .tex file the main name is just set to that. 
                    mainName = Path.GetFileName(texFiles[0]);
                    //remove .tex from filename
                    mainName = mainName.Remove(mainName.Length - 4);
                    texFile = texFiles[0];
                    
                }


                // Parsing bibfile if there is a bib file
                // adding the new nodes to NodeDict
                var bibFiles = Directory.GetFiles(texDir, "*.bib", SearchOption.AllDirectories);

                foreach (var bibFile in bibFiles)
                {
                    ParserService.AddToNodeDict(await BibService.ParseBibFile(bibFile));
                }


                //Check for bbl file
                var bblFiles = Directory.GetFiles(texDir, "*.bbl", SearchOption.AllDirectories);

                foreach (var bblFile in bblFiles)
                {
                    ParserService.AddToNodeDict(await BblService.ParseBBLFile(bblFile));
                }
                

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
                texFiles = new string[]{texFile};
                

            }



            // Compiling the texfile to pdf
            Console.WriteLine("dir: " + texDir);
            Console.WriteLine("file: " + texFile);
            CompilerService.CompileTex(texDir, texFile);

            if (mainName == null)
                mainName = "";
            string allTexFilesAsString = MultiService.ScanMultipleFiles(texFiles, mainName);
            ParserService.ParseTex(allTexFilesAsString);

            //Create Jsonfile for d3.js
            var nodes = ParserService.GetNodes().Values.ToList();
            var links = ParserService.GetLinks();
            var prefixes = ParserService.GetPrefixes();
            var nodeToLineText = LineCountService.GetLineFromNodeName(allTexFilesAsString, ParserService.GetNodes());
            var environments = ParserService.GetEnvs().Values.ToList();

            JsonService.CreateJsonFile(nodes, links, environments, prefixes, nodeToLineText, jsonDir + "some.json");


            var response = new ContentResult
            {
                // {"guid" : userId, "mainName" : texFile}
                Content = "{\"guid\" :" + "\"" + userId + "\", \"mainName\" :" + "\"" + texFile + "\"}",
                ContentType = "application/json"
            };

            return response; 
            

        }

        private string TexFilesToString(string[] texFiles)
        {
            string tmp = "";
            foreach (string s in texFiles)
            {
                string fileName = Path.GetFileName(s);
                fileName = fileName.Remove(fileName.Length - 4);
                tmp += fileName + ", ";
            }
            tmp = tmp.Remove(tmp.Length - 2) + ".";
            return tmp;
        }


        [HttpPost]
        [Route("pdf")]
        public async Task<IActionResult> GetPdfAsync(string guid, string mainTex)
        {
            try
            {

                string pdfDir = environment.ContentRootPath + "/papers/tex/" + guid + "/";
                await Task.Delay(10000);
    
                var pdfPaths = Directory.GetFiles(pdfDir, "*.pdf", SearchOption.AllDirectories);
                
                foreach (var pdfPath in pdfPaths){

                    if(Path.GetFileNameWithoutExtension(pdfPath) ==  Path.GetFileNameWithoutExtension(mainTex))
                    {
                        FileStream pdf2 = new FileStream(pdfPath, FileMode.Open);
                        return new FileStreamResult(pdf2, "application/pdf");
                    }

                }
              
                FileStream pdf = new FileStream(pdfPaths[0], FileMode.Open);
                return new FileStreamResult(pdf, "application/pdf");
            } catch (Exception e)
            {
                Console.WriteLine( e.StackTrace);
                return BadRequest();
            }
        }


        [HttpPost]
        [Route("json")]
        public IActionResult GetJsonAsync(string guid)
        {
            string jsonDir = environment.ContentRootPath + "/papers/jsons/" + guid + "/";

            var jsonPath = Directory.GetFiles(jsonDir, "*.json", SearchOption.TopDirectoryOnly)[0];

            FileStream jsonFile = new FileStream(jsonPath, FileMode.Open);
            return new FileStreamResult(jsonFile, "application/json");
        }







    }
}
