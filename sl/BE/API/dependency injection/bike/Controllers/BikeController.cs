using Microsoft.AspNetCore.Mvc;
using bike.Services; 
using bike.Models;


namespace bike.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class BikeController : ControllerBase
    {
        BikeService _bikeService;
        public BikeController(BikeService bikeService)
        {
              this._bikeService = bikeService;
        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._bikeService.GetBike());
        }

        [HttpPost]
        public ActionResult Post(Bike bike)
        {
            this._bikeService.AddBike(bike);
            return Ok();
        }

    }

}