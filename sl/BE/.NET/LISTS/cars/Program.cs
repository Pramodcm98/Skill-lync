using System;
using System.Collections.Generic;

namespace cars
{
    class Program
    {
        public static void Main()
        {

            Mycars H = new Mycars()
            {
                Model = "city",
                CC = 1200,
                year = 2018

            };
            Mycars M = new Mycars()
            {
                Model = "SWIFT",
                CC = 1500,
                year = 2020

            };
            Mycars N = new Mycars()
            {
                Model = "Renault",
                CC = 1800,
                year = 2020

            };

            List<Mycars> Myc = new List<Mycars>();
            Myc.Add(H);
            Myc.Add(M);
            Myc.Add(N);


            foreach (Mycars car in Myc)
            {
                Console.WriteLine("Model= {0} , CC = {1}, Year = {2}", car.Model, car.CC, car.year);

            }
        }
        public class Mycars
        {
            public string Model { get; set; }
            public int CC { get; set; }
            public int year { get; set; }

            // public string Add()
            // {
            //     return "this is returning";
            // }


        }
        
    }
}
