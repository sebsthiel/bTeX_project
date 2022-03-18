using System;
using System.Collections.Generic;

namespace Hermes.Website.Models
{
    public class Env
    {
        string name;
        string text;
        public int counter;
        List<string> countersShouldReset;
        List<string> countersShouldUpdate;

        public Env(string name, string text, int counter, List<string> countersShouldReset, List<string> countersShouldUpdate)
        {
            this.name = name;
            this.text = text;
            this.counter = counter;
            this.countersShouldReset = countersShouldReset;
            this.countersShouldUpdate = countersShouldUpdate;
        }
    }
}
