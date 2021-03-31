using System;
using System.Collections.Generic;

namespace Kerala
{
    class senses
    {
        public static void Main()
        {
            districts TVC = new districts();
            {
                TVC.name = "THIRUVANATHAPURAM";
                TVC.population = 9.58;
                TVC.position = "Bottom";

            }
            districts ALPY = new districts();
            {
               ALPY.name = "ALAPPUZHA";
                ALPY.population = 1.74;
                ALPY.position = "BMiddle";


            }

            districts MLP = new districts();
            {
                MLP.name = "MALAPPURAM";
                MLP.population = 41.1;
                MLP.position = "TBottom";

            }
            districts KZG = new districts();
            {
                KZG.name = "KAZARGOD";
                KZG.population = 13.1;
                KZG.position = "Top";

            }

            List<districts> mydistricts = new List<districts>();
            mydistricts.Add(TVC);
            mydistricts.Add(ALPY);
            mydistricts.Add(MLP);
            mydistricts.Add(KZG);
         
            
            foreach(districts dst in mydistricts)
            {
          // Console.WriteLine("District = " + dst.name + " " + "Population = " + dst.population + " s" + "Position = " + dst.position  );
             Console.WriteLine("District = {0}, Population = {1}, Position = {2}", dst.name,dst.population,dst.position);
             
            }

        }

        public class districts
        {
            public string name { get; set; }
            public double population { get; set; }
            public string position { get; set; }

        }
      
    }
}
