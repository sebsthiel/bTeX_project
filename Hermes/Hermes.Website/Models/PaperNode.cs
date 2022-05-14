using System;

namespace Hermes.Website.Models
{
    public class PaperNode : Node
    {
        public string paperType, author, title, note, journal, fJournal, volume, year, pages, issn, 
                      mrClass, mrNumber, doi, url, key, series, month, number, isbn, organization, 
                      publisher, mrReviewer, booktitle;


        public PaperNode(string name, string createdAt, string type, int lineCount)
            : base(name, createdAt, type, lineCount)
        {

        }
        

    }
}
