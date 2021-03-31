using System;
using System.Collections.Generic;


namespace test
{
    class MyBoats
    {
        public static void Main()
        {
            suzuki sz = new suzuki();
            //sz.Boat();
            sz.nitro();
            sz.speedmode();
            sz.speedmode("SUZUKI");
            sz.speedmode("yamaha", 2);

            Honda H = new Honda();
            H.toproof();
            H.Horn();
            //Honda();

            speeder2 s2 = new speeder2();
            s2.drift();

            speeder s = (speeder)s2;
            s.drift();



            boatlist A = new boatlist()
            {
                name = "one",
                cost = 20
            };
            boatlist B =new boatlist()
            {
                name ="two",
                cost =30
            };


            List<boatlist> Mybts = new List<boatlist>();
            Mybts.Add(A);
            Mybts.Add(B);
          

            foreach (boatlist btlst in Mybts)
            {
                Console.WriteLine("Name = " + btlst.name + " Cost = " + btlst.cost );
            }

        }
        public class boatlist
        {
            public string name { get; set; }
            public int cost { get; set; }

        }
        public abstract class Boat
        {
            public Boat()
            {
                Console.WriteLine("The boat will start");
            }
            public void stop()
            {
                Console.WriteLine("The boat will stop");

            }
            public abstract void nitro();


        }

        public class suzuki : Boat
        {
            public override void nitro()
            {
                Console.WriteLine("The boat will have nitros");
            }

            public void speedmode()
            {
                Console.WriteLine("The boat will trigger Speed mode");
            }
            public void speedmode(string name)
            {
                Console.WriteLine("boat will have " + name + " printed on it");
            }
            public void speedmode(string name, int year)
            {
                if (name == "yamaha" && year == 2)
                {
                    Console.WriteLine("The  boat will have special speed mode");

                }
                else
                {
                    Console.WriteLine("the boat will have normal speed mode");
                }
            }

        }

        interface Extra
        {
            public void toproof();
        }

        public class Honda : Extra
        {
            public Honda()
            {
                Console.WriteLine("this is a special boat");

            }
            public void toproof()
            {
                Console.WriteLine("The toproof will be opened");
            }

            public void Horn()
            {
                Console.WriteLine("The boat will have horn");

            }


        }

        public class speeder
        {
            public virtual void drift()
            {
                Console.WriteLine("the boat will drift normally");

            }

        }
        public class speeder2 : speeder
        {
            public override void drift()
            {
                Console.WriteLine("the boat will do a special drift");

            }
        }

        // public class hyundai
        // {
        //     public hyundai()
        //     {
        //         Console.WriteLine("this is a special boat");

        //     }

        // }

    }
}