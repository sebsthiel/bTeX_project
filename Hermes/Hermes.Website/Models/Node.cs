using System;
namespace Hermes.Website.Models
{
   
    public class Node
    {
        //public long id;
        public string name;
        public string createdAt;
        public string type;

        public Node(string name, string createdAt, string type)
        {
            this.name = name;
            //id = ID_Generator.GenerateID();
            this.createdAt = createdAt;
            this.type = type;
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
