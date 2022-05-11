using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Hermes.Website.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;



namespace Hermes.Website.Services
{
    public class LineCountService
    {
        public IWebHostEnvironment WebHostEnvironment { get; }
        
        public LineCountService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        int lineCount = 0;

        public Dictionary<string,string> GetLineFromNodeName(string input, Dictionary<string, Node> nodes)
        {
            Dictionary<int, string> lineCountToLine = CreateMapFromLineCountToLine(input);
            Console.WriteLine("LINECOUNTY: " + lineCount);
            return CreateMapFromNodeToLine(nodes, lineCountToLine);
        }

        //Returns Dictionary that takes a linecount and return the plaintext of that line
        private Dictionary<int, string> CreateMapFromLineCountToLine(string input)
        {
            Dictionary<int, string> lineCountToLine = new Dictionary<int, string>();
            string pattern = @"(?<lineText>[^\n]*)(?<newLine>\n)";

            foreach (Match match in Regex.Matches(input, pattern))
            {
                GroupCollection groups = match.Groups;
 
                lineCountToLine.Add(lineCount, groups["lineText"].Value);
                lineCount++;
                
            }

            return lineCountToLine;
        }

        //Returns Dictionary that takes a node-name and return the plaintext of that line(s)
        private Dictionary<string, string> CreateMapFromNodeToLine(Dictionary<string, Node> nodes, Dictionary<int, string> lineCountToLine)
        {
            Dictionary<string, string> nodeNameToLine = new Dictionary<string, string>();
            foreach (KeyValuePair<string, Node> entry in nodes)
            {
                string allLinesOfNode;
                //Console.WriteLine("LineCountFixThing: " + entry.Value.name + " startCount: " + entry.Value.lineCount + " endCount: " + entry.Value.lineCountEnd);
                if (entry.Value.lineCountEnd != null) //If true then it is an environment and can spand several lines
                    allLinesOfNode = CombineAllLinesOfEnvironment(entry.Value.lineCount, (int)entry.Value.lineCountEnd, lineCountToLine);
                else
                {
                    //TODO: "Temporary" solution, since we don't give papers a linecount
                    if (entry.Value.lineCount == -1)
                        allLinesOfNode = "No information available on " + entry.Value.name;
                    else
                        allLinesOfNode = lineCountToLine[entry.Value.lineCount];
                }
                    
                nodeNameToLine.Add(entry.Key, allLinesOfNode);
            }

            return nodeNameToLine;
        }

        //Combines everything from linestart to lineend into one string comprising of several lines of text
        private string CombineAllLinesOfEnvironment(int startLine, int endLine, Dictionary<int, string> lineCountToLine)
        {
            if (startLine == endLine) // the environment starts and ends on the same line
                return lineCountToLine[startLine];

            string tmp = ""; 
            for (int i = startLine; (i < endLine) && i < (startLine + 5); i++)
            {
                tmp += lineCountToLine[i];
                tmp += '\n';
            }
            return tmp;
        }

        public int GetLineCount()
        {
            return lineCount;
        }
    }

}


