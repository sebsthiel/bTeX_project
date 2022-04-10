using System;
namespace Hermes.Website.Models
{
   
    public class Node
    {
        //public long id;
        public string name;
        public string createdAt;
        public string type;
        public int lineCount;
        public int? lineCountEnd;

        public Node(string name, string createdAt, string type, int lineCount)
        {
            this.name = name;
            //id = ID_Generator.GenerateID();
            this.createdAt = createdAt;
            this.type = type;
            this.lineCount = lineCount;
            lineCountEnd = null;
        }

        public string GetName()
        {
            return name;
        }

        public new string GetType()
        {
            return type;
        }

        public string GetCreatedAt()
        {
            return createdAt;
        }
    }
}
