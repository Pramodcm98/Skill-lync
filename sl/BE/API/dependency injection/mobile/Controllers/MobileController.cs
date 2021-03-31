using Microsoft.AspNetCore.Mvc;
using mobile.Service;
using mobile.Model;

namespace  mobile.controllers
{
    [ApiController]
    [Route("[controller]")]


  
    public class MobileController:ControllerBase
    {
        MobileService _mobileService;
        public MobileController(MobileService mobileService)
        {
            this._mobileService=mobileService;

        }

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._mobileService.GetMobile());
        }

        [HttpPost]
        public ActionResult Post(Mobile mobile)
        {
            this._mobileService.AddMobile(mobile);
            return Ok();
        }
    }

    
}
