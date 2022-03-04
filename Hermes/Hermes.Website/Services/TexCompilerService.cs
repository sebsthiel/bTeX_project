using System;
using System.Diagnostics;
using System.IO;
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
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "serverPdfs", "outputFile.pdf"); }
        }

        // What should we return?
        // we want to return the pdf, but is that an IFormFile or something else?
        // Look at how to return pdf
        public async Task GetPdfAsync(IFormFile uploadFile)
        {
            Console.WriteLine("Post request");
            Console.WriteLine("Hallo " + uploadFile);
            long size = uploadFile.Length;

            if (uploadFile.Length > 0)
            {
                var filePath = Directory.GetCurrentDirectory() + "/serverPdfs/outputFile.tex";//Path.GetTempFileName();
                var test = Directory.GetCurrentDirectory() + "/serverPdfs/";
                //UploadFilePath = filePath;
                Console.WriteLine("FILEPATH: " + filePath);
                using (var stream = System.IO.File.Create(filePath))
                {
                    await uploadFile.CopyToAsync(stream);
                    Console.WriteLine("wd: " + Directory.GetCurrentDirectory());
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
                    // pandoc sourcefile.tex -o output.pdf
                    // 
                    await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ test+ " " + filePath);
                    Console.WriteLine("DONE");
                   // pdf = System.IO.File.OpenRead("outputFile.pdf");
                    //using (var stream2 = System.IO.File.OpenRead("outputFile.pdf"))
                    //{
                    //    Console.WriteLine("Before: " + pdf);
                    //    //
                    //    //pdf = new FormFile(stream2, 0, stream2.Length, null, UploadFilePath);
                    //    Console.WriteLine("After: " + pdf);

                    //};

                    //await process.StandardInput.WriteLineAsync("echo hello2");
                    //var output = await process.StandardOutput.ReadLineAsync();

                    //Console.WriteLine(output);
                }
            }
        }



    }

}

   
