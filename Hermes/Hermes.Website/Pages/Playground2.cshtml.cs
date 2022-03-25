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
    public class PlaygroundModel2 : PageModel
    {

        IWebHostEnvironment environment;
        public TexCompilerService CompilerService;
        public TexParserService ParserService;


        public PlaygroundModel2(
            IWebHostEnvironment environment,
            TexCompilerService compilerService,
            TexParserService texParserService)
        {
            this.environment = environment;
            CompilerService = compilerService;
            ParserService = texParserService;

        }


        public FileStream pdf { get; private set; }

        //public String testString {get; set; }

        //[BindProperty]
        public string UploadFilePath { get; set; }

        public void OnGet()
        {
            Console.WriteLine("HELLO");
        }

        public string PdfPath;



        public async Task<IActionResult> OnPostUploadAsync(IFormFile uploadFile)
        {
            Console.WriteLine("USER: ");
            /*
                Når vi laver en post request med en upload fil laver vi også en Guid
                Som kommer til at fungere som key for at få vores pdf fil i dictionary

                Hvis det ikke virker så se om der er en måde at identificere brugere ellers


            */
            //https://www.pragimtech.com/blog/blazor/asp.net-core-rest-api-get-by-id/
            // create Guid which is the key and ID for httpget[id]


            // 
            Console.WriteLine("POST");
            await CompilerService.GetPdf2Async(uploadFile);
            PdfPath = CompilerService.GetPdf;
            //var t = CompilerService.PdfFileName;

            //ParserService.ParseTex(CompilerService.TexFileName);

            return RedirectToPage("./Playground2");

        }


    }

}

