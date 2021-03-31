using Microsoft.AspNetCore.Mvc;
using thing.Services;
using thing.Models;

namespace thing.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class ThingController : ControllerBase
    {
        ThingServices _ThingServices;
        public ThisController(ThingServices thingServices)
        {
            this._ThingServices = thingServices;
            
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._ThingServices.GetThings());

        }

        [HttpPost]
        public ActionResult Post(Thing thing)
        {
            this._ThingServices.AddThing(thing);
            return Ok();
        
        }

    }
    
}