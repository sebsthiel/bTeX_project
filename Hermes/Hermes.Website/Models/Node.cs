using System;
namespace Hermes.Website.Models
{
   
    public class Node
    {

        protected string name;
        protected Guid ID { get; }
        protected Guid createdAt;
        protected string type;

        public Node(string name, Guid createdAt, string type)
        {
            this.name = name;
            ID = Guid.NewGuid();
            this.createdAt = createdAt;
            this.type = type;
        }
    }
}
