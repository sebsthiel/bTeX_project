using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO;
using System.Threading.Tasks;
using System;
namespace Hermes.Website.Pages
{
    public class IndexModel : PageModel
    {
       
        public IndexModel()
        {
           
        }
        [BindProperty]
        public IFormFile Upload { get; set; }
        public string FileAsString { get; set; }
        
        public void OnGet()
        {

        }
    }
}