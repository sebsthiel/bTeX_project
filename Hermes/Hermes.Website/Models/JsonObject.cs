using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hermes.Website.Models
{   
    public class JsonObject
    {
        //public List<PaperNode> paperNodes;
        //public List<EnvNode> envNodes;
        public List<Node> nodes;
        public List<Link> links;

        public JsonObject(/*List<PaperNode> paperNodes, List<EnvNode> envNodes*/List<Node> nodes, List<Link> links)
        {
            /*this.paperNodes = paperNodes;
            this.envNodes = envNodes;*/
            this.nodes = nodes;
            this.links = links;
        }
    }
}
