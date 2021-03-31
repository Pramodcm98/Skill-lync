using System.Collections.Generic;
using jeep.Models;



namespace jeep.Services
{
    public class JeepService
    {
        List<Jeep> _jeepList = new List<Jeep>();
        public JeepService()
        {
            
        }
        
        public List<Jeep> GetJeep()
        {
            return _jeepList;
        }

        public void AddJeep(Jeep jeep)
        {
            _jeepList.Add(jeep);
        }

    }
}