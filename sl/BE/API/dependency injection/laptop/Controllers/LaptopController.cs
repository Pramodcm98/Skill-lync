
using Microsoft.AspNetCore.Mvc;
using laptop.Services;
using laptop.Model;



namespace laptop.controller
{
    [ApiController]
    [Route("[controller]")]
    public class LaptopController : ControllerBase
    {
        LaptopServices _laptopService;
        public LaptopController(LaptopServices laptopServices)
        {
          _laptopService = laptopServices;
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._laptopService.GetLaptops());
        }

        [HttpPost]
        public ActionResult Post(Laptop laptop)
        {
            this._laptopService.Addlaptop(laptop);
            return Ok();
        }

    }

}