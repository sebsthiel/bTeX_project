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
            //try
            //{
            string pdfPath;

            string texFile = "";

            // generate userId by guid
            var userId = Guid.NewGuid();

            long size = file.Length;
            if (size <= 0) return null;

            // creating paths and directory for the new files that will be saved
            var projectName = userId;//Path.GetFileNameWithoutExtension(file.FileName);
            Console.WriteLine("project name: " + projectName);
            string texDir = Path.Combine(new string[] { environment.ContentRootPath, "papers", "tex", projectName + "", " " }).Trim();
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
                    //Console.WriteLine("ZipFile: " + zipFile);
                    await file.CopyToAsync(stream);
                }
                TexCompilerService.DeleteContentInDir(texDir);
                Console.WriteLine("ZipFile: " + zipFile);
                Console.WriteLine("TexDir: " + texDir);
                ZipFile.ExtractToDirectory(zipFile, texDir);


                //TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
                texFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.TopDirectoryOnly);
                amountOfTexFiles = texFiles.Length;
                if (amountOfTexFiles > 1)
                {
                    Console.WriteLine("MORE THAN 1 TEX");
                    foreach (string v in texFiles)
                    {

                        if (Path.GetFileNameWithoutExtension(v) == "main")
                        {
                            texFile = v;
                            
                            break;

                        }
                    }

                }
                else
                {
                    //If there is only one .tex file the main name is just set to that. 
                    mainName = Path.GetFileName(texFiles[0]);
                    //remove .tex from filename
                    mainName = mainName.Remove(mainName.Length - 4);
                    Console.WriteLine("Only one .tex file from pdfController: " + mainName);

                    texFile = texFiles[0];
                    
                }


                // Parsing bibfile if there is a bib file
                // adding the new nodes to NodeDict

                //FIXME SEB ÆNDREDE zipDir to texDir
                var bibFiles = Directory.GetFiles(texDir, "*.bib", SearchOption.TopDirectoryOnly);
                Console.WriteLine("BibFiles Length: " + bibFiles.Length);
                if (bibFiles.Length > 1)
                {
                    Console.WriteLine("MORE THAN 1 BIB");
                }
                else if (bibFiles.Length != 0)
                {
                    List<Node> paperNodes = await BibService.ParseBibFile(bibFiles[0]);
                    // add to nodeDict
                    ParserService.AddToNodeDict(paperNodes);

                }

                //Check for bbl file
                var bblFiles = Directory.GetFiles(texDir, "*.bbl", SearchOption.TopDirectoryOnly);
                Console.WriteLine("BBLFiles length: " + bblFiles.Length);
                if (bblFiles.Length > 1)
                {
                    Console.WriteLine("MORE THAN 1 BBL");
                }
                else if (bblFiles.Length != 0)
                {
                    List<Node> paperNodes = await BblService.ParseBBLFile(bblFiles[0]);
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
            pdfPath = await CompilerService.CompileTexAsync(texDir, texFile);

            // Parsing tex to get dict of Nodes and list of Edges (links)

            var tmpFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.AllDirectories);

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
            var prefixes = ParserService.GetPrefixes();
            var nodeToLineText = LineCountService.GetLineFromNodeName(allTexFilesAsString, ParserService.GetNodes());
            var environments = ParserService.GetEnvs().Values.ToList();



            //var dagNodes = makeDagNodes(ParserService.GetNodes(), links);

            Console.WriteLine("PDFCont + ParserService Linecount: " + ParserService.GetLineCount());
            Console.WriteLine("PDFCont + LineCountService Linecount: " + LineCountService.GetLineCount());


            using (StreamWriter writer = new StreamWriter(@"C:\Users\jaffa\OneDrive\Skrivebord\allfilesasstring.txt"))
            {
                writer.WriteLine(allTexFilesAsString);
            }

            // JsonService.CreateDagJson(dagNodes, "/Users/sebs/Code/6Semester/Bachelor/Codebase/bTeX_project/Hermes/Hermes.Website/tester/some.json");
            JsonService.CreateJsonFile(nodes, links, environments, prefixes, nodeToLineText, jsonDir + "some.json");


            Console.WriteLine("texFile: " + texFile);

            var guid = new ContentResult
            {
                // {"guid" : userId, "mainName" : texFile}
                Content = "{\"guid\" :" + "\"" + userId + "\", \"mainName\" :" + "\"" + texFile + "\"}",
                ContentType = "application/json"
            };


            //await Task.Delay(2000);
            return guid; //TODO return mainName too
            //FileStream pdf = new FileStream(pdfPath, FileMode.Open);
            //return new FileStreamResult(pdf, "application/pdf");
            //} catch (FileNotFoundException f)
            //{
                
            //    return BadRequest();
            //}

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

                
                Console.WriteLine("HALLO _-------_______---_-_--_: ");
                //string pdfDir = environment.ContentRootPath + "/papers/pdfs/" + guid + "/";
                string pdfDir = environment.ContentRootPath + "/papers/tex/" + guid + "/";
                Console.WriteLine("guid: " + guid);
                await Task.Delay(5000);
                //Console.WriteLine("pdfDir: " + pdfDir);
                var pdfPaths = Directory.GetFiles(pdfDir, "*.pdf", SearchOption.TopDirectoryOnly);
                //Console.WriteLine("pdfPath: " + pdfPath);
                foreach (var pdfPath in pdfPaths){

                    //TODO Fix this
                    Console.WriteLine("mainTex: " + mainTex);
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



        private List<DagNode> MakeDagNodes(Dictionary<string, Node> nodes, List<Link> links)
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
