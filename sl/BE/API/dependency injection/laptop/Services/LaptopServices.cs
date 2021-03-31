using System.Collections.Generic;
using laptop.Model;

namespace laptop.Services
{
    public class LaptopServices
    {
        List<Laptop> _laptopList = new List<Laptop>();
        public LaptopServices()
        {

        }

        public List<Laptop> GetLaptops()
        {
           return _laptopList; 
        }

        public void Addlaptop(Laptop laptop)
        {
            _laptopList.Add(laptop);
        }
    }

}