using System;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace Hermes.Website.Services
{
    public class TexCompilerService
    {
        public TexCompilerService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        public string PdfFileName
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "papers/pdfs", "article.pdf"); }
        }

        private string pdfFileName;

        public async Task GetPdfAsync(IFormFile uploadFile){
            long size = uploadFile.Length;
            
            if (size <= 0) return;

            var fileToCompile = "";
            var dirForTex = "";

            // ZIP file was uploaded
            if(uploadFile.ContentType == "application/zip")
            {
                // Create and set Directory for where zip file should be saved
                Directory.CreateDirectory(Directory.GetCurrentDirectory() + "/papers/zips/");
                var zipFilePath = Directory.GetCurrentDirectory() + "/papers/zips/" + uploadFile.FileName;

                // Create zip file at {zipfilePath}
                using (var stream = System.IO.File.Create(zipFilePath))
                {
                    await uploadFile.CopyToAsync(stream);
                }
                
                var texFilePath = Directory.GetCurrentDirectory() + "/papers/tex/" + Path.GetFileNameWithoutExtension(zipFilePath) +"/";
                Directory.CreateDirectory(texFilePath);
                dirForTex = texFilePath;
               
                // unzip zip file from {zipFilePath} to {texFilePath}
                ZipFile.ExtractToDirectory(zipFilePath, texFilePath);

                // TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
                fileToCompile = texFilePath + "article.tex";

            } else
            {
                var texFilePath = Directory.GetCurrentDirectory() + "/papers/tex/single/" + "outputFile.txt";
                Directory.CreateDirectory(Directory.GetCurrentDirectory() + "/papers/tex/single/");
                using (var stream = System.IO.File.Create(texFilePath))
                {
                    await uploadFile.CopyToAsync(stream);
                }
                fileToCompile = texFilePath;

            }
                
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
            var compiledPdfPath = Directory.GetCurrentDirectory() + "/papers/pdfs/";
            Directory.CreateDirectory(compiledPdfPath);
            Console.WriteLine("Current path: " + Directory.GetCurrentDirectory());
            Console.WriteLine("File: " + fileToCompile);
            Console.WriteLine("output: " + compiledPdfPath);
            await process.StandardInput.WriteLineAsync("echo hej");
            await process.StandardInput.WriteLineAsync("cd " + dirForTex);
            await process.StandardInput.WriteLineAsync("echo bye");
            await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ compiledPdfPath + " " + fileToCompile);


        }

        public async Task GetPdf2Async(IFormFile uploadFile)
        {
            long size = uploadFile.Length;

            var currentTempPath = Directory.GetCurrentDirectory() + "/testfolder/";
            var uploaded_files = currentTempPath + "/uploaded_files";
            var compiledPdfPath = currentTempPath + "/pdfs";
            var rawFilePath = uploaded_files + "/testZip.zip";
            Directory.CreateDirectory(currentTempPath);
            Directory.CreateDirectory(uploaded_files);
            Directory.CreateDirectory(compiledPdfPath);
            Console.WriteLine("zipPath = " + currentTempPath);

            if(uploadFile.ContentType == "application/zip")
            {
                Console.WriteLine("Uploaded file was a ZIP file");
                using (var stream = System.IO.File.Create(rawFilePath))
                {
                    await uploadFile.CopyToAsync(stream);
                }
                ZipFile.ExtractToDirectory(rawFilePath, compiledPdfPath);
                Console.WriteLine("TEST");
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
                    var test = Directory.GetCurrentDirectory() + "/serverPdfs/";
                    Console.WriteLine("WHICH ");
                    await process.StandardInput.WriteLineAsync("which pdflatex");
                    //await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ test+ " " + compiledPdfPath + "/article.tex");
                    //Console.WriteLine("DONE");
                return;
            } 

            if (uploadFile.Length > 0)
            {
                var filePath = Directory.GetCurrentDirectory() + "/serverPdfs/outputFile.tex";//Path.GetTempFileName();
                var test = Directory.GetCurrentDirectory() + "/serverPdfs/";
                //UploadFilePath = filePath;
                //Console.WriteLine("FILEPATH: " + filePath);
                using (var stream = System.IO.File.Create(filePath))
                {
                    await uploadFile.CopyToAsync(stream);
                    //Console.WriteLine("wd: " + Directory.GetCurrentDirectory());
                    // Start the child process.
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
                    await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ test+ " " + filePath);
                    //Console.WriteLine("DONE");
                   
                }
            }
        }



    }

}

   
