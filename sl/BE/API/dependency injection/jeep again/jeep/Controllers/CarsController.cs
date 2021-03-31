using Microsoft.AspNetCore.Mvc;
using jeep.Model;
using jeep.Services;

namespace jeep.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class jeepController : ControllerBase
    {
        JeepServices _jeepservices;
        public jeepController(JeepServices jeepservices)
        {
            this._jeepservices = jeepservices;
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._jeepservices.GetJeep());
        }


        [HttpPost]
        public ActionResult Post(Jeep jeep)
        {
            this._jeepservices.Addcar(jeep);
            return Ok();
        }

    }
}
