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

         public string TexFileName
         {
             get {return Path.Combine(WebHostEnvironment.ContentRootPath, "papers/tex/Archive/", "article.tex");}

         }

        //private string pdfFileName;
        //private string texFileName;

        public string GetPdf { get{ Console.WriteLine("Called GetPDF  " + pdfFile); return pdfFile;} }


        private string texFile;
        private string pdfFile;


        public async Task GetPdf2Async(IFormFile uploadedFile)
        {
            long size = uploadedFile.Length;

            if (size <= 0) return;

            var projectName = Path.GetFileNameWithoutExtension(uploadedFile.FileName);
            Console.WriteLine("project name: " + projectName);
            string texDir = WebHostEnvironment.ContentRootPath + "/papers/tex/" + projectName + "/";
            string zipDir = WebHostEnvironment.ContentRootPath + "/papers/zips/"+ projectName + "/";
            string pdfDir = WebHostEnvironment.ContentRootPath +"/papers/pdfs/"+ projectName + "/";

            Directory.CreateDirectory(texDir);
            Directory.CreateDirectory(zipDir);
            Directory.CreateDirectory(pdfDir);

            string zipFile = zipDir + uploadedFile.FileName;
           

            if(uploadedFile.ContentType == "application/zip")
            {

                DeleteContentInDir(zipDir);
                using (var stream = System.IO.File.Create(zipFile))
                {
                    await uploadedFile.CopyToAsync(stream);
                }
                DeleteContentInDir(texDir);
                ZipFile.ExtractToDirectory(zipFile, texDir);


                //TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
                var texFiles = Directory.GetFiles(texDir, "*.tex", SearchOption.TopDirectoryOnly);
                if(texFiles.Length > 1){
                    Console.WriteLine("MORE THAN 1 TEX");
                }
                texFile = texFiles[0];
            }
            else
            {

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
            await process.StandardInput.WriteLineAsync("cd " + texDir);
            await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ pdfDir + " " + texFile);
            
            pdfFile = pdfDir + Path.GetFileNameWithoutExtension(texFile) + ".pdf";
            Console.WriteLine("HEY: " + pdfFile);
            

        }


        // public async Task GetPdfAsync(IFormFile uploadFile){
        //     long size = uploadFile.Length;
            
        //     if (size <= 0) return;

        //     var fileToCompile = "";
        //     var dirForTex = "";

        //     var overallZips = "/papers/zips/";
            

        //     // ZIP file was uploaded
        //     if(uploadFile.ContentType == "application/zip")
        //     {
        //         // Create and set Directory for where zip file should be saved
        //         //Directory.CreateDirectory(Directory.GetCurrentDirectory() + "/papers/zips/");
        //         Directory.CreateDirectory(Directory.GetCurrentDirectory() + overallZips);

        //         var projectName = Path.GetFileNameWithoutExtension(uploadFile.FileName);
                
        //         // Directory for uploaded zip file
        //         var zipFileDir = Directory.GetCurrentDirectory() + overallZips + projectName + "/";
        //         var zipFilePath = zipFileDir + uploadFile.FileName;
        //         Directory.CreateDirectory(zipFileDir);

        //         //Deleting all files for that zipfilename
        //         Console.WriteLine("-------------zipFilePath-----------_: \n" + zipFileDir );
        //         DeleteContentInDir(zipFileDir);

        //         // Create zip file at {zipfilePath}
        //         using (var stream = System.IO.File.Create(zipFilePath))
        //         {
        //             await uploadFile.CopyToAsync(stream);
        //         }

        //         dirForTex = Directory.GetCurrentDirectory() + "/papers/tex/" + projectName + "/"; //Path.GetFileNameWithoutExtension(zipFilePath) + "/";
        //         Directory.CreateDirectory(dirForTex);
        //         DeleteContentInDir(dirForTex);
        //         // unzip zip file from {zipFilePath} to {dirForTex}
        //         ZipFile.ExtractToDirectory(zipFilePath, dirForTex);

        //         //TODO FIND A WAY TO FIND main.tex or something -> which .tex file to compile?
        //         var texFiles = Directory.GetFiles(dirForTex, "*.tex", SearchOption.TopDirectoryOnly);
        //         if(texFiles.Length > 1){
        //             Console.WriteLine("MORE THAN 1 TEX");
        //         }
        //         fileToCompile = dirForTex + Path.GetFileName(texFiles[0]);
        //     }
        //     else
        //     {
        //         var texFilePath = Directory.GetCurrentDirectory() + "/papers/tex/single/" + "outputFile.tex";
        //         Directory.CreateDirectory(Directory.GetCurrentDirectory() + "/papers/tex/single/");
        //         using (var stream = System.IO.File.Create(texFilePath))
        //         {
        //             await uploadFile.CopyToAsync(stream);
        //         }
        //         fileToCompile = texFilePath;

        //     }
                
        //     Process process = new Process
        //     {
        //         StartInfo = new ProcessStartInfo
        //         {
        //             FileName = "bash",
        //             RedirectStandardInput = true,
        //             RedirectStandardOutput = true,
        //             RedirectStandardError = true,
        //             UseShellExecute = false
        //         }
        //     };
        //     process.Start();
        //     var compiledPdfPath = Directory.GetCurrentDirectory() + "/papers/pdfs/" + Path.GetFileNameWithoutExtension(fileToCompile)+"/";
        //     Directory.CreateDirectory(compiledPdfPath);
        //     DeleteContentInDir(compiledPdfPath);
        //     Console.WriteLine("Current path: " + Directory.GetCurrentDirectory());
        //     Console.WriteLine("File: " + fileToCompile);
        //     Console.WriteLine("output: " + compiledPdfPath);
        //     await process.StandardInput.WriteLineAsync("cd " + dirForTex);
        //     await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ compiledPdfPath + " " + fileToCompile);
            
        //     pdfFileName = Path.GetFileNameWithoutExtension(fileToCompile) + ".pdf";
        //     texFileName = Path.GetFileName(fileToCompile);
        //     Console.WriteLine("DONE COMPILING");


        // }


        

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

   
