using System.Collections.Generic;
using System.IO;
using Hermes.Website.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace Hermes.Website.Services
{
    public class JsonCreaterService
    {

        public JsonCreaterService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        public void CreateJsonFile(List<Node> nodes, List<Link> links, List<Env> environments, HashSet<string> labelPrefixes, Dictionary<string,string> nodeToLineText, string jsonPath)
        {

            JsonObject json = new JsonObject(nodes, links, environments, labelPrefixes, nodeToLineText);
            
            string strResultJson = JsonConvert.SerializeObject(json, Formatting.Indented);
            File.WriteAllText(jsonPath, strResultJson);
        }


    }

}


