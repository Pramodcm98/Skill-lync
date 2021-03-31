using Microsoft.AspNetCore.Mvc;
using jeep.Services;
using jeep.Models;

namespace jeep.Controllers
{
    [ApiController]
    [Route("[controller]")]

    
    public class jeepController : ControllerBase
    {
        JeepService _jeepService;
        public jeepController(JeepService jeepService)
        {
            _jeepService = jeepService;

        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._jeepService.GetJeep());
        }

        [HttpPost]
        public ActionResult Post(Jeep jeep)
        {
            this._jeepService.AddJeep(jeep);
            return Ok();
        }

    }
}