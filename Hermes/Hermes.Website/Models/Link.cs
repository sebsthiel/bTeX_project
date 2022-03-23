using System;
namespace Hermes.Website.Models
{
    public class links
    {

        public string source, target, type;

        public links(string source, string target, string type)
        {
            this.source = source;
            this.target = target;
            this.type = type;
        }

    }
}
