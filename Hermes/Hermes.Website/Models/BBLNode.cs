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
        public BBLNode(string name, string createdAt, string type, int lineCount)
            : base(name, createdAt, type, lineCount)
        {
            information = new List<string>();
        }
    }
}
