using Microsoft.AspNetCore.Mvc;

namespace things.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class ThingController : ControllerBase
    {
        public ThingController()
        {

        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok();

        }

        [HttpPost]
        public ActionResult Post()
        {
            return Ok();
        }

    }
}