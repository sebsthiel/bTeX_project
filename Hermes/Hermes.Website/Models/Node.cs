using System;
namespace Hermes.Website.Models
{
   
    public class Node
    {
        public long ID { get; }
        protected string name;
        protected string createdAt;
        protected string type;

        public Node(string name, string createdAt, string type)
        {
            this.name = name;
            ID = ID_Generator.GenerateID();
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
