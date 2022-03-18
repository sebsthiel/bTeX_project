using System;
namespace Hermes.Website.Models
{
    public class EnvNode : Node
    {
        int counter;
        public EnvNode(string name, Guid createdAt, string type, int counter)
            : base(name, createdAt, type)
        {
            this.counter = counter;
            
        }
    }
}
