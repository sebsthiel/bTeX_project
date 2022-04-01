using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hermes.Website.Models
{
    public class DagNode
    {
        public string id;
        public List<string> parentIds;
        public DagNode(string id)
        {
            this.id = id;
            parentIds = new List<string>();
        }

        public void addParent(string parrent)
        {
            parentIds.Add(parrent);
        }
    }
}
