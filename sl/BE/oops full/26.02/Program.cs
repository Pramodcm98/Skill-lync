using System;

namespace _26._02
{
    class learning
    {
        public static void Main()
        {
            Toyota T = new Toyota();
            T.start();   // base class car
            T.GPS();
            T.woofer();
            T.speakers();
            T.ac();
            T.radio();


            Maruthi M = new Maruthi();
            M.start();
            M.Rims();
            M.woofer();
            M.speakers();
            M.radio();

            Honda H = new Honda();
            H.start();
            H.TopOpen();
            H.TopOpen("city", 2020);
            H.radio();
            H.GPS();

            hyundai HY = new hyundai();
            HY.nitro();

            Tata TT = new Tata(); 
            TT.nitro();




        }

        public abstract class car
        {
            public void start()        
            {
                Console.WriteLine("The car will start");
            }
            public abstract void ac();    // abstract class have to be defined for the inheriting class
            public abstract void radio();    // abstract class have to be defined for the inheriting class

        }

        interface extra   //classes inheriting this will define this methods
        {
            void woofer();
            void speakers();
        }

        public class Toyota : car, extra
        {
            public void GPS()
            {
                Console.WriteLine("car will have GPS");
            }
             public override void ac()    //defining from base abstract class 
            {
                Console.WriteLine("car will have extra AC");
            }
            public override void radio() //defining from base abstract class 
            {
                Console.WriteLine("Toyota car will have audio");
            }
            public void woofer()   //defining from interface class
            {
                Console.WriteLine("car will have sub woofer");

            }
            public void speakers()    //defining from interface class
            {
                Console.WriteLine("car will have extra speakers");
            }
            public virtual void showcapser()    //method overriding: overriding done in inheriting class Honda 
            {
                Console.WriteLine("Toyota car will have showcapser");
            }

        }
        public class Maruthi : car, extra
        {
            public void Rims()
            {
                Console.WriteLine("Maruthi car will have extra rims");
            }
            public override void ac()    //defining from base abstract class 
            {
                Console.WriteLine("Maruthi will have extra AC");
            }
            public override void radio()  //defining from base abstract class 
            {
                Console.WriteLine("Maruthi car will have audio");
            }
            public void woofer()  //defining from interface class
            {
                Console.WriteLine("Maruthi car will have extra special sub woofer");
            }
            public void speakers()   //defining from interface class
            {
                Console.WriteLine("Maruthi car will have extra Dolby 360 speakers");
            }
            

        }

        public class Honda : Toyota
        {

            public void TopOpen()     //loading
            {
                Console.WriteLine("car top will try to open");
            }
            public void TopOpen(string name, int year)   //overloading Topopen by parameter changing

            {
                if (name == "city" && year == 2020)
                {
                    Console.WriteLine("car will have a top opening");
                }
                else
                {
                    Console.WriteLine("car will have no top opening");
                }
            }
            public override void radio() //defining from base abstract class 
            {
                Console.WriteLine("car will have radio");

            }

            //dont have to give all abstract in base class here because this is inherited from another child class
            public override void showcapser()   //method overriding: overriding from Toyota
            {
                Console.WriteLine("Honda car will have showcapser");
            }

        }

        public class hyundai
        {
            public virtual void nitro() //method overriding:
            {
                Console.WriteLine("car will have radio");
            }

        }
        public class Tata : hyundai
        {
            public override void nitro()
            {
                Console.WriteLine("car will have n number of radio");

            }
        }
        
    }
}
