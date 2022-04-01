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

        public void CreateJsonFile(List<Node> nodes, List<Link> links, string jsonPath)
        {
            JsonObject json = new JsonObject(nodes, links);
            
            string strResultJson = JsonConvert.SerializeObject(json, Formatting.Indented);
            File.WriteAllText(jsonPath, strResultJson);
        }

        public void CreateDagJson(List<DagNode> nodes, string jsonPath)
        {
            string strResultJson = JsonConvert.SerializeObject(nodes, Formatting.Indented);
            File.WriteAllText(jsonPath, strResultJson);
        }
    }

}


