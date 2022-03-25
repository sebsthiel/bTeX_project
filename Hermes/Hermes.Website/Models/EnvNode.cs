using System;
namespace Hermes.Website.Models
{
    public class EnvNode : Node
    {
        public int counter;
        public EnvNode(string name, string createdAt, string type, int counter)
            : base(name, createdAt, type)
        {
            this.counter = counter;
            
        }
    }
}
