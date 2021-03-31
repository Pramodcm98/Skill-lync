using Microsoft.AspNetCore.Mvc;
using item.Model;
using item.Service;

namespace item.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ItemController : ControllerBase
    {
        ItemsService _itemsService; 
        public ItemController(ItemsService itemsService)
        {
            this._itemsService = itemsService;
        }

        [HttpGet]
        public ActionResult Get()    //method
        {
         return Ok(this._itemsService.GetItems());
        }

        [HttpPost]
        public ActionResult Post(Items item)
        {
            this._itemsService.AddItem(item);
            return Ok();
        }
    }
}