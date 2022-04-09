using System;
namespace Hermes.Website.Models
{
    public class EnvNode : Node
    {
        public int counter;
        public EnvNode(string name, string createdAt, string type, int counter, int lineCount)
            : base(name, createdAt, type, lineCount)
        {
            this.counter = counter;
            
        }
    }
}
