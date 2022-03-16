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
            //TODO Make dynamic
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "papers/pdfs/article/", "article.pdf"); }
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

                var projectName = Path.GetFileNameWithoutExtension(uploadFile.FileName);
                
                var zipFileDir = Directory.GetCurrentDirectory() + "/papers/zips/"+projectName +"/";
                var zipFilePath = zipFileDir + uploadFile.FileName;
                Directory.CreateDirectory(zipFileDir);
                //Deleting all files for that zipfilename
                Console.WriteLine("-------------zipFilePath-----------_: " + projectName);
                DeleteContentInDir(zipFileDir);
                // Create zip file at {zipfilePath}
                using (var stream = System.IO.File.Create(zipFilePath))
                {
                    await uploadFile.CopyToAsync(stream);
                }

                dirForTex = Directory.GetCurrentDirectory() + "/papers/tex/" + Path.GetFileNameWithoutExtension(zipFilePath) + "/";
                Directory.CreateDirectory(dirForTex);
                DeleteContentInDir(dirForTex);
                // unzip zip file from {zipFilePath} to {dirForTex}
                ZipFile.ExtractToDirectory(zipFilePath, dirForTex);

                //TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
                fileToCompile = dirForTex + "article.tex";
            }
            else
            {
                var texFilePath = Directory.GetCurrentDirectory() + "/papers/tex/single/" + "outputFile.tex";
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
            var compiledPdfPath = Directory.GetCurrentDirectory() + "/papers/pdfs/" + Path.GetFileNameWithoutExtension(fileToCompile)+"/";
            Directory.CreateDirectory(compiledPdfPath);
            DeleteContentInDir(compiledPdfPath);
            Console.WriteLine("Current path: " + Directory.GetCurrentDirectory());
            Console.WriteLine("File: " + fileToCompile);
            Console.WriteLine("output: " + compiledPdfPath);
            await process.StandardInput.WriteLineAsync("cd " + dirForTex);
            await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ compiledPdfPath + " " + fileToCompile);
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

   
