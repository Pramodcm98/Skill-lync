
using Microsoft.AspNetCore.Mvc;
using fridge.Services;
using fridge.Models;

namespace fridge.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class fridgeController : ControllerBase
    {   
        FridgeServices _fridgeServices;
        public fridgeController(FridgeServices fridgeServices)
        {
           this._fridgeServices = fridgeServices;
           
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._fridgeServices.GetFridges());
        }


        [HttpPost]
        public ActionResult Post(Fridge fridge)
        { 
            this._fridgeServices.AddFridge(fridge);
            return Ok();
        }
        
    }
    
}