using System;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Threading.Tasks;
using BibtexLibrary;
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

        public string PdfFileName
        {
            //TODO Make dynamic
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "papers/pdfs/article/", "article.pdf"); }
        }

        public string TexFileName
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "papers/tex/Archive/", "article.tex"); }

        }

        private string pdfFileName;

        public async Task ParseBibAsync(IFormFile file)
        {
            BibtexFile f = BibtexLibrary.BibtexImporter.FromString(@"@book{ aaker:1981a,
                                                                      author = {David A. Aaker},
                                                                      title = {Multivariate Analysis in Marketing},
                                                                      edition = {2},
                                                                      publisher = {The Scientific Press},
                                                                      year = {1981},
                                                                      address = {Palo Alto},
                                                                      topic = {multivariate-statistics;market-research;}
                                                                     }");

            foreach (BibtexEntry entry in f.Entries)
            {
                Console.WriteLine(entry.Tags["author"]);
            }
        }

        public async Task GetPdfAsync(IFormFile uploadFile)
        {
            long size = uploadFile.Length;

            if (size <= 0) return;

            var fileToCompile = "";
            var dirForTex = "";

            var texFilePath = Directory.GetCurrentDirectory() + "/papers/tex/single/" + "outputFile.tex";
            Directory.CreateDirectory(Directory.GetCurrentDirectory() + "/papers/tex/single/");
            using (var stream = System.IO.File.Create(texFilePath))
            {
                await uploadFile.CopyToAsync(stream);
            }
            fileToCompile = texFilePath;

            Process process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "bash",
                    RedirectStandardInput = true,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false
                }
            };
            process.Start();
            var compiledPdfPath = Directory.GetCurrentDirectory() + "/papers/pdfs/" + Path.GetFileNameWithoutExtension(fileToCompile) + "/";
            Directory.CreateDirectory(compiledPdfPath);
            DeleteContentInDir(compiledPdfPath);
            Console.WriteLine("Current path: " + Directory.GetCurrentDirectory());
            Console.WriteLine("File: " + fileToCompile);
            Console.WriteLine("output: " + compiledPdfPath);
            await process.StandardInput.WriteLineAsync("cd " + dirForTex);
            await process.StandardInput.WriteLineAsync("pdflatex -output-directory=" + compiledPdfPath + " " + fileToCompile);
            pdfFileName = compiledPdfPath;


        }

        private static void DeleteContentInDir(string zipFilePath)
        {
            System.IO.DirectoryInfo di = new DirectoryInfo(zipFilePath);
            foreach (FileInfo file in di.EnumerateFiles())
            {
                file.Delete();
            }
            foreach (DirectoryInfo dir in di.EnumerateDirectories())
            {
                dir.Delete(true);
            }
        }
    }

}


