using System;
using System.Collections.Generic;

namespace Products
{
    class shoppping
    {
        public static void Main()
        {
            Product pro1 = new Product()
            {
                dress = "Trousers",
                price = 1000,
                discount = 100

            };
            Product pro2 = new Product()
            {
                dress = "t-Shirt",
                price = 1500,
                discount = 100
            };

            List<Product> myproduct = new List<Product>();
            myproduct.Add(pro1);
            myproduct.Add(pro2);


            foreach (Product pro in myproduct)
            {
                Console.WriteLine("dress = {0},price={1},discount ={2}" , pro.dress, pro.price, pro.discount);
                // Console.WriteLine(pro.dress);
                // Console.WriteLine(pro.price);
                // Console.WriteLine(pro.discount);
            }

            // Product prod = myproduct[0];
          
            // // Console.WriteLine("Dress = {1}, discount = {2}, price = {1}" + prod.dress, prod.price, prod.discount);
            // Console.WriteLine("Dress = " + prod.dress + ", price = " + prod.price + ", discount = " + prod.discount);
                     


        }
        public class Product
        {
            public string dress { get; set; }
            public int price { get; set; }
            public int discount { get; set; }

        }
    }
}
                