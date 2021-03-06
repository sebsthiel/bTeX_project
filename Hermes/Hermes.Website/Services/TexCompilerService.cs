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

        


        public void CompileTex(string texDir, string texFile)
        {
            long size = texFile.Length;

            if (size <= 0) return;
            Console.WriteLine("RUNS");
            ProcessStartInfo startInfo = new ProcessStartInfo("latexmk", "-pdf " + "-interaction=nonstopmode " + "\""+texFile+"\"");
            startInfo.WorkingDirectory = texDir;
            Process proc = new Process();
            proc.StartInfo = startInfo;
            proc.Start();

            

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

   
