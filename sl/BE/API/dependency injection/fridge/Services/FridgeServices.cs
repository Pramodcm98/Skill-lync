using System.Collections.Generic;
using fridge.Models;

namespace fridge.Services
{
    public class FridgeServices
    {
        List<Fridge> _fridgeList = new List<Fridge>();
        public FridgeServices()
        {
            
        }
         
         public List<Fridge> GetFridges()
         {
             return _fridgeList;
         }

         public void AddFridge(Fridge fridge)
         {
             _fridgeList.Add(fridge);
         }

    }
}