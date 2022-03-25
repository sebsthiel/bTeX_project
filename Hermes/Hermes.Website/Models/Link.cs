using System;
namespace Hermes.Website.Models
{
    public class Link
    {

        public string source, target, type;

        public Link(string source, string target, string type)
        {
            this.source = source;
            this.target = target;
            this.type = type;
        }

    }
}
