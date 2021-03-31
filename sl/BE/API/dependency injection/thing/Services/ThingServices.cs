using thing.Models;
using System.Collections.Generic;

namespace thing.Services

{
    public class ThingServices
    {
        List<Thing> _thingsList = new List<Thing>();
        public ThingServices()
        {

        }

        public List<Thing> GetThings()
        {
            return _thingsList;

        }

        public void AddThing(Thing thing)
        {
            _thingsList.Add(thing);
            
        }


    }
}