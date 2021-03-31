
using Microsoft.AspNetCore.Mvc;
using car.Services;
using car.Models;


namespace car.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class carController : ControllerBase
    {
        CarServices _carServices;
        public carController(CarServices carServices)
        {
            this._carServices = carServices;

        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._carServices.GetCars());

        }
        [HttpPost]
        public ActionResult Post(Car car)
        {
            this._carServices.AddCar(car);
            return Ok();

        }
    }
}