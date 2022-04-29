using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hermes.Website.Models
{   
    public class JsonObject
    {
        public List<Node> nodes;
        public List<Link> links;
        public List<Env> environments;
        public HashSet<string> labelPrefixes;

        public JsonObject(List<Node> nodes, List<Link> links ,List<Env> environments, HashSet<string> labelPrefixes)
        { 
            this.nodes = nodes;
            this.links = links;
            this.environments = environments;
            this.labelPrefixes = labelPrefixes;

        }
    }
}
