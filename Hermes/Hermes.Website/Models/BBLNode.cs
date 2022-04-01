using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hermes.Website.Models
{
    public class BBLNode : Node
    {
        public List<string> information;
        public string author;
        public BBLNode(string name, string createdAt, string type)
            : base(name, createdAt, type)
        {
            information = new List<string>();
        }
    }
}
