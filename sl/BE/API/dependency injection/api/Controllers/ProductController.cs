
using Microsoft.AspNetCore.Mvc;
using api.Services;      //dependency
using api.Models;     //

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase    // inheriting 
    {
        ProductService _productService;    //injecting the dependency(service).....//productService is a saving space 
        public ProductController(ProductService productService)     //constructor.....//productService is the temp strg lctn
        {
            this._productService = productService;      //using _productService we use the service provided
        }

        [HttpGet]

        public ActionResult Get()    //RETURN type is ActionResult
        {
            return Ok(this._productService.GetProducts());      // ok is a method //
        }

        [HttpPost]

        public ActionResult Post(Product product)     //ActionResult is a method
        {
            this._productService.AddProduct(product);
            return Ok();                            // ok is a method
        }


    }
}