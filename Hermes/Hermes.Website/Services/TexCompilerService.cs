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


         public string TexFile { get; set; }


        public string GetPdf { get{ Console.WriteLine("Called GetPDF  " + pdfFile); return pdfFile;} }

        private string pdfFile;


        public async Task CompileTexAsync(string texDir, string pdfDir)
        {
            long size = TexFile.Length;

            if (size <= 0) return;
           
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
            await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ pdfDir + " " + TexFile);
            
            pdfFile = pdfDir + Path.GetFileNameWithoutExtension(TexFile) + ".pdf";
            Console.WriteLine("HEY: " + pdfFile);
            

        }

        

        public static void DeleteContentInDir(string zipFilePath)
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

   
