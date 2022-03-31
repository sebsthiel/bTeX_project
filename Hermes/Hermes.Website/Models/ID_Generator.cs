using System;
using System.Collections.Generic;

namespace Hermes.Website.Models
{
    public class ID_Generator
    {
        static long ID = 0;
        static List<long> ids = new List<long>();

        public static long GenerateID()
        {
            ID++;
            ids.Add(ID);
            if(ID == long.MinValue)
            {
                if (ids.Contains(ID))
                {
                    throw new Exception("No more IDs to pick");
                }
            }
            return ID;

        }

    }
}
