using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hermes.Website.Services;

namespace Hermes.Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BibParserController : ControllerBase
    {           

        public BibParserController(BibParserService bibService)
        {
            this.BibService = bibService;
        }

        public BibParserService BibService { get; }

        [HttpGet]
        public string Get()
        {
            //Console.WriteLine("Testing from BibController");
            return BibService.testString;
            //return CompilerService.GetPdf();

            //BibService.ParseBib();

        }

        [HttpPost]
        public void TestPrint()
        {
            //Console.WriteLine("ABC");
            
        }

            


        }
    }

