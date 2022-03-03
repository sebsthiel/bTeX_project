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

namespace Hermes.Website.Pages
{
    public class PlaygroundModel : PageModel
    {

        IHostingEnvironment _environment;
        public PlaygroundModel(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        [BindProperty]
        public string UploadFilePath { get; set; }
       
        public void OnGet()
        {
        }



        public async Task OnPostUploadAsync(IFormFile uploadFile)
        {
            Console.WriteLine("Post request");
            Console.WriteLine("Hallo " + uploadFile);
            long size = uploadFile.Length;

            if (uploadFile.Length > 0)
            {
                var filePath = "outputFile";//Path.GetTempFileName();
                UploadFilePath = filePath;
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
                    await process.StandardInput.WriteLineAsync("pdflatex " + UploadFilePath);
                
                    
                    //await process.StandardInput.WriteLineAsync("echo hello2");
                    var output = await process.StandardOutput.ReadLineAsync();

                    Console.WriteLine(output);

                    
                    
                }
                
            }

        }

    }

}
