
using System.Collections.Generic;
using jeep.Model;

namespace jeep.Services
{
    public class JeepServices
    {

        List<Jeep> listjeepervice = new List<Jeep>();
        public JeepServices()
        {

        }

        public List<Jeep> GetJeep()
        {
            return listjeepervice;
        }

        public void Addcar(Jeep jeep)
        {
           listjeepervice.Add(jeep);
        }


    }
}