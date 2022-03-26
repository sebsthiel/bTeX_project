using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hermes.Website.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hermes.Website.Controllers
{
    [Route("api/[controller]")]
    public class TexController : Controller
    {
        public TexController(TexCompilerService compilerService)
        {
            this.CompilerService = compilerService;
        }

        public TexCompilerService CompilerService { get; }


        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            //return CompilerService.GetPdf();
            Console.WriteLine("PDFFileName: " + CompilerService.TexFile);
            FileStream stream = new FileStream(CompilerService.TexFile, FileMode.Open);
            
            return new FileStreamResult(stream, "application/pdf");
            
        }

        
    }
}
