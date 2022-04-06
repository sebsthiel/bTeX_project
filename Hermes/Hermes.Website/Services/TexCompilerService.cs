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


        public async Task<string> CompileTexAsync(string texDir, string pdfDir, string texFile)
        {
            long size = texFile.Length;

            if (size <= 0) return null;
           
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
            await process.StandardInput.WriteLineAsync("latexmk -output-directory=" + pdfDir + " " + texFile);
           
            pdfFile = pdfDir + Path.GetFileNameWithoutExtension(texFile) + ".pdf";
            Console.WriteLine("HEY: " + pdfFile);

            return pdfFile;
            

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

   
