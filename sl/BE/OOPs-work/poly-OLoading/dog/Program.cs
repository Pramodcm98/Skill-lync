using System;

namespace dog
{
   public class behaviours
    {
        public static void Main()
        {
            Tommy tmy = new Tommy();
            tmy.behaving();
            tmy.behaving("Pedigree");

            Home tmyy = new Home ();
            tmyy.behaving("stranger");

        }
        public class Tommy
        {
            public void behaving()
            {
                Console.WriteLine("He behaves descently");
            }
            public void behaving(string food)
            {
                Console.WriteLine("He becomes happy if we give " + food);
            }
        }
            public class Home : Tommy
            {
                public void behaving(string person)
                {
                    if (person == "owner")
                    {
                        Console.WriteLine("Tommy wags his tail");
                    }
                    else
                    {
                        Console.WriteLine("Tommy starts to bark");
                    }

                }
            }
        
    }
}