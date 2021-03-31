using System.Collections.Generic;
using item.Model;

namespace item.Service
{
    public class ItemsService
    {
        List<Items> _itemsList = new List<Items>();
       
        public ItemsService()
        {

        }
            

        public List<Items> GetItems()
        {
            return _itemsList;
        }

        public void AddItem(Items items)
        {
          _itemsList.Add(items);
        }
    }
}