using System;

namespace house
{

    class Myhouse
    {

        public static void Main()
        {
            Hall H = new Hall();
            H.chair();
            H.TVstand();
            H.Rack();

            Bedroom Br = new Bedroom();
            Br.chair();
            Br.AC();



        }

        public class Furnitures
        {
            public void chair()
            {
                Console.WriteLine("A chair will be placed");
            }
            public void Almara()
            {
                Console.WriteLine("An almara will be place");
            }
            public void TVstand()
            {
                Console.WriteLine("A TV stand will be placed", "A sofa will be placed");
            }



        }
        public class Hall : Furnitures
        {
            public void Rack()
            {
                Console.WriteLine("A file and accessories rack will be placed");
            }

        }
        public class Bedroom : Furnitures
        {
            public void AC()
            {
                Console.WriteLine("An Air-Conditioner will be placed");
            }
        }
    }
}
