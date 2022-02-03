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
        private IHostingEnvironment _environment;
        public IndexModel(IHostingEnvironment environment)
        {
            _environment = environment;
        }
        [BindProperty]
        public IFormFile Upload { get; set; }
        public string FileAsString { get; set; }
        
        public void OnPost()
        {
            if (Upload.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    Upload.CopyTo(ms);
                    ms.Position = 0;
                    StreamReader sr = new StreamReader(ms);
                    string s = sr.ReadToEnd();
                    FileAsString = s;
                }
            }
            Console.WriteLine(FileAsString);
          
        }
    }
}