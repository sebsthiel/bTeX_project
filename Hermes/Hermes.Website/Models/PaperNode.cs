using System;

namespace Hermes.Website.Models
{
    public class PaperNode : Node
    {
        public string paperType { get; }
        public string title { get; }
        /*tilføj anden information vi vil vide om en Article*/

        public PaperNode(string name, Guid createdAt, string type, string paperType, string title)
            : base(name, createdAt, type)
        {
            this.paperType = paperType;
            this.title = title;
        }
    }
}
