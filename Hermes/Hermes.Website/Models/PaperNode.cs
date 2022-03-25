using System;

namespace Hermes.Website.Models
{
    public class PaperNode : Node
    {
        public string paperType, author, title, note, journal, fJournal, volume, year, pages, issn, 
                      mrClass, mrNumber, doi, url, key, series, month, number, isbn, organization, 
                      publisher, mrReviewer, booktitle;
        /*tilføj anden information vi vil vide om en Article*/

        public string getName()
        {
            return name;
        }

        public PaperNode(string name, Guid createdAt, string type)
            : base(name, createdAt, type)
        {

        }
        

    }
}
