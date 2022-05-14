using System;
namespace Hermes.Website.Models
{
   
    public class Node
    {
        public string name;
        public string createdAt;
        public string type;
        public int lineCount;
        public int? lineCountEnd;

        public Node(string name, string createdAt, string type, int lineCount)
        {
            this.name = name;
            this.createdAt = createdAt;
            this.type = type;
            this.lineCount = lineCount;
            lineCountEnd = null;
        }

    }
}
