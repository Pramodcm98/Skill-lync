using System.Collections.Generic;
using api.Models;

namespace api.Services
{
    public class ProductService
    {
        List<Product> _productList = new List<Product>();
        public ProductService()
        {

        }

        public List<Product> GetProducts()       //return type is  List<Product> ie list of product   // this is for getting
        {
            return _productList;
        }

        public void AddProduct(Product product)       // this is for posting// post method doesnt return anything so we give void
        {
            _productList.Add(product);
        }
    }

}