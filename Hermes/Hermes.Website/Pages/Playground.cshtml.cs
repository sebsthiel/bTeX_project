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

namespace Hermes.Website.Pages
{
    public class PlaygroundModel : PageModel
    {

        IWebHostEnvironment environment;
        public TexCompilerService CompilerService;

        public BibParserService BibService;

        public PlaygroundModel(
            IWebHostEnvironment environment,
            TexCompilerService compilerService,
            BibParserService bibService)
        {
            this.environment = environment;
            CompilerService = compilerService;
            BibService = bibService;
        }


        public FileStream pdf { get; private set; }

        //public String testString {get; set; }

        //[BindProperty]
        public string UploadFilePath { get; set; }

        public void OnGet()
        {
        }



        public async Task OnPostUploadAsync(IFormFile uploadFile)
        {
            Console.WriteLine("WRONG");
            await CompilerService.GetPdf2Async(uploadFile);

            // //Pdf = CompilerService.GetPdf()

            //  //--------------------------------------------


            // Console.WriteLine("Post request");
            // Console.WriteLine("Hallo " + uploadFile);
            // long size = uploadFile.Length;

            // if (uploadFile.Length > 0)
            // {
            //     var filePath = Directory.GetCurrentDirectory() + "/serverPdfs/outputFile.tex";//Path.GetTempFileName();
            //     var test = Directory.GetCurrentDirectory() + "/serverPdfs/";
            //     UploadFilePath = filePath;
            //     Console.WriteLine("FILEPATH: " + filePath);
            //     using (var stream = System.IO.File.Create(filePath))
            //     {
            //         await uploadFile.CopyToAsync(stream);
            //         Console.WriteLine("wd: " + Directory.GetCurrentDirectory());
            //         // Start the child process.
            //         Process process = new Process
            //         {
            //             StartInfo = new ProcessStartInfo
            //             {
            //                 FileName = "bash",
            //                 RedirectStandardInput = true,
            //                 RedirectStandardOutput = true,
            //                 RedirectStandardError = true,
            //                 UseShellExecute = false
            //             }
            //         };
            //         process.Start();
            //         // pandoc sourcefile.tex -o output.pdf
            //         // 
            //         await process.StandardInput.WriteLineAsync("pdflatex -output-directory="+ test+ " " + UploadFilePath);
            //         Console.WriteLine("DONE");
            //        // pdf = System.IO.File.OpenRead("outputFile.pdf");
            //         //using (var stream2 = System.IO.File.OpenRead("outputFile.pdf"))
            //         //{
            //         //    Console.WriteLine("Before: " + pdf);
            //         //    //
            //         //    //pdf = new FormFile(stream2, 0, stream2.Length, null, UploadFilePath);
            //         //    Console.WriteLine("After: " + pdf);

            //         //};

            //         //await process.StandardInput.WriteLineAsync("echo hello2");
            //         //var output = await process.StandardOutput.ReadLineAsync();

            //         //Console.WriteLine(output);
            //     }
            // }

        }

    }

}