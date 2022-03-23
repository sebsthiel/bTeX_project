using System;
using System.Collections.Generic;

namespace Hermes.Website.Models
{
    public class Env
    {
        public string name;
        public string text;
        public int counter;
        public List<string> countersShouldReset;
        public List<string> countersShouldUpdate;

        public Env(string name, string text, int counter, List<string> countersShouldReset, List<string> countersShouldUpdate)
        {
            this.name = name;
            this.text = text;
            this.counter = counter;
            this.countersShouldReset = countersShouldReset;
            this.countersShouldUpdate = countersShouldUpdate;
        }

        public void AddToCounterShouldReset(string envName)
        {
            countersShouldReset.Add(envName);
        }

        public void AddToCounterShouldUpdate(string envName)
        {
            countersShouldUpdate.Add(envName);
        }
    }
}
