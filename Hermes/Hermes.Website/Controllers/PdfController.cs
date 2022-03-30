using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hermes.Website.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hermes.Website.Controllers
{
    [Route("api/[controller]")]
    public class PdfController : Controller
    {
        public PdfController(TexCompilerService compilerService)
        {
            this.CompilerService = compilerService;
        }

        public TexCompilerService CompilerService { get; }


        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            
            var tmp = CompilerService.GetPdf;
            Console.WriteLine("Get PDF: " + tmp );
            FileStream stream;

            // tmp code. If no pdf uploaded return test.pdf
            if (tmp == null){
                stream = new FileStream("/Users/sebs/Code/6Semester/Bachelor/Codebase/bTeX_project/Hermes/Hermes.Website/tester/main.pdf", FileMode.Open);
            }
            else{
                 stream = new FileStream(tmp, FileMode.Open);
            }
           
            
            return new FileStreamResult(stream, "application/pdf");
            
        }

        [HttpPost]
        public IActionResult Post(IFormFile file)
        {
           
            //Console.WriteLine("hallo: ", data["file"]);
            Console.WriteLine("POST REQUEST");
            if(file == null)
            {
                Console.WriteLine("is NULL");
            }
            Console.WriteLine(file);
            Console.WriteLine("Len: "+ file.Length);

            FileStream stream = new FileStream("/Users/sebs/Code/6Semester/Bachelor/Codebase/bTeX_project/Hermes/Hermes.Website/tester/main.pdf", FileMode.Open);
            return new FileStreamResult(stream, "application/pdf");


        }



        


    }
}
