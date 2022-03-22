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
        }



        public async Task OnPostUploadAsync(IFormFile uploadFile)
        {
            Console.WriteLine("Hallo");
            await CompilerService.GetPdfAsync(uploadFile);

            ParserService.ParseTex(CompilerService.TexFileName);

        }

    }

}

