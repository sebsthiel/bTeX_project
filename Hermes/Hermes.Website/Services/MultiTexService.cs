using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace Hermes.Website.Services
{
    public class MultiTexService
    {
        public MultiTexService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        // A dictionary that maps from the file's name to the text in that file as a string
        private Dictionary<string, string> files;

        public string ScanMultipleFiles(string[] filePaths, string mainFileName)
        {
            //DefaultValue is main
            if (mainFileName == "")
                mainFileName = "main";
            mainFileName += ".tex";
            //try
            //{
            files = new Dictionary<string, string>();
            
            //Map a file's name to the text within it
            foreach (string filePath in filePaths)
            {
                string fileName = Path.GetFileName(filePath);
                Console.WriteLine("Name: " + fileName);
                //ignore files in MACOSX
                if (!fileName.StartsWith("._"))
                {
                    string fileText = File.ReadAllText(filePath);
                  
                    files.Add(fileName, fileText);
                }
                
            }

            //TODO: Change to be user input file 
            string fullFileAsString = ScanFile(files[mainFileName]);
            //Console.WriteLine(fullFileAsString);
            return fullFileAsString;
            //} catch (Exception)
            //{
            //    Console.WriteLine("(Exception) The name of mainfile from multiservice: " + mainFileName);
            //    throw new FileNotFoundException(mainFileName);
            //}
            
        }

        private string ScanFile(string fileAsString)
        {
            string pattern = @"(?<input>\\(input|include){(?<fileName>.*?)})";

            foreach (Match match in Regex.Matches(fileAsString, pattern))
            {
                GroupCollection groups = match.Groups;

                //Delete any directory path I.e "prefix/file.tex" removes "prefix/"
                string fileName = groups["fileName"].Value;
                if (fileName.Contains("/"))
                {
                    string[] fileNameArray = fileName.Split("/");
                    fileName = fileNameArray[fileNameArray.Length-1];
                }

                //TODO: Maybe unnecesary 
                string inputFileText = ScanFile(files[fileName]);
                fileAsString = fileAsString.Replace(groups["input"].Value, inputFileText);
            }
            return fileAsString;
        }





    }

}