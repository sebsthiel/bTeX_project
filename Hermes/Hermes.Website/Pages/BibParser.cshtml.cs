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
using System.Text;

namespace Hermes.Website.Pages
{
    public class BibParserModel : PageModel
    {

        IWebHostEnvironment environment;

        public BibParserService BibService;
        public TexParserService TexService;
        public JsonCreaterService JsonService;
        public BBLParserService BBLParser;


        public BibParserModel(
            IWebHostEnvironment environment,
            BibParserService bibService,
            TexParserService texService,
            JsonCreaterService jsonService,
            BBLParserService bblParser)
        {
            this.environment = environment;
            BibService = bibService;
            TexService = texService;
            JsonService = jsonService;
            BBLParser = bblParser;
           
        }

        public string UploadFilePath { get; set; }
       
        public void OnGet()
        {
            //(string tmp1, string tmp2) = TexService.CheckForCommandsInName(@"proposition \label{abc} \texit{def} some}");
            //\textit{State}
            //Console.WriteLine("TMP1: " + tmp1 + " TMP2: " + tmp2);
            //string tmpR = TexService.RemoveCommand(@"proposition \ref{abc} \texit{def} some");
            //Console.WriteLine(tmpR);
            //string tmp = TexService.RemoveCommand(@"abc \texit");
            //Console.WriteLine(tmp);
            //TexService.ParseTex(@"\section{Proof of Proposition 1} en-proof-proposition-1}");
            PrintNodes(TexService.GetNodes());
            
        }


        public async Task OnPostUploadAsync(IFormFile uploadFile)
        {
            //Console.WriteLine("Posted Someting in BibParser");
            string path = SaveFileToPath(uploadFile);



            //List<Node> nodes = await BBLParser.ParseBBLFile(path);
            TexService.ParseTexFromFile(path);
            Dictionary<string,Node> nodes = TexService.GetNodes();
            
            PrintNodes(nodes);
            //\subsection{\textit{State}}
            //List<DagNode> dNodes = makeDagNodes(TexService.GetNodes(), TexService.GetLinks());
            //string jsonPath = Path.Combine(environment.ContentRootPath + "/tester/", "some.json");
            //JsonService.CreateDagJson(dNodes, jsonPath);


        }

        public string SaveFileToPath(IFormFile file)
        {
            string path = environment.ContentRootPath + "\\tester\\";
            string filePath = Path.Combine(path, file.FileName);
            using (Stream fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write))
            {
                file.CopyTo(fileStream);
            }
            
            return filePath;
        }

        private void PrintPaperNodes(List<Node> paperNodes)
        {
            foreach (BBLNode node in paperNodes)
            {

                Console.WriteLine("============================");
                Console.WriteLine("Name: " + node.name);
                Console.WriteLine("Author: " + node.author);
                //Console.WriteLine("Information:");
                //foreach (string s in node.information)
                //    Console.WriteLine("item: " + s);
            }
        }

        private void PrintNodes(Dictionary<string, Node> nodes)
        {
            foreach (Node node in nodes.Values) 
            {
                Console.WriteLine("NodeName: " + node.name + " | NodeType: " + node.type + " | CreatedAt: " + node.createdAt);
                
                
            }
        }
        
        public static string ReadAsList(IFormFile file)
        {
            var result = new StringBuilder();
            using (var reader = new StreamReader(file.OpenReadStream()))
            {
                while (reader.Peek() >= 0)
                    result.AppendLine(reader.ReadLine());
            }
            return result.ToString();
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
                    dNodes[link.source] = new DagNode(idCounter+"");
                }
                if (!dNodes.ContainsKey(link.target))
                {
                    idCounter++;
                    toId[link.target] = idCounter + "";
                    dNodes[link.target] = new DagNode(idCounter+"");
                }
                if (!dNodes[link.target].parentIds.Contains(toId[link.source]))
                    dNodes[link.target].addParent(toId[link.source]);

            }

            return dNodes.Values.ToList();
        }

    }

} 

