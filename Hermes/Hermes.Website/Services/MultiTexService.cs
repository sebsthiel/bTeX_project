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
            files = new Dictionary<string, string>();
            foreach (string filePath in filePaths)
            {
                string fileName = Path.GetFileName(filePath);

                //Remove .tex from fileName
                fileName = fileName.Remove(fileName.Length-4);
                string fileText = File.ReadAllText(filePath);

                //DefaultValue is main
                if (mainFileName == "")
                    mainFileName = "main";
                files.Add(fileName, fileText);
            }

            //TODO: Change to be user input file 
            string fullFileAsString = ScanFile(files[mainFileName]);
            return fullFileAsString;
        }

        private string ScanFile(string fileAsString)
        {
            string pattern = @"(?<input>\\(input|include){(?<fileName>.*?)})";

            foreach (Match match in Regex.Matches(fileAsString, pattern))
            {
                GroupCollection groups = match.Groups;
                
                //TODO: Maybe unnecesary 
                
                string inputFileText = ScanFile(files[groups["fileName"].Value]);
                fileAsString = fileAsString.Replace(groups["input"].Value, inputFileText);
            }
            return fileAsString;
        }





    }

}