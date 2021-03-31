using System;

namespace abstract_interface
{
    class Program
    {
        public static void Main()
        {
            Toyota Toy = new Toyota();
            Toy.FM();
            Toy.start();
            Toy.stop();
            Toy.sterio();
            Toy.freshner();

            benz z = new benz();
            z.nthh();
            z.benz();
            



        }
        public abstract class car
        {
            public void start()    //for constructor give the class name and remove void  and remove start method from psvm
            {
                Console.WriteLine("strat the car ");
            }
            public abstract void stop();
        }
        interface extra  // for interface by default it is public
        {
            void sterio();
            void freshner();
        }
        
        public class Toyota : car, extra
        {
            public void FM()
            {
                Console.WriteLine("FM Radio is ON ");
            }
            public override void stop()
            {
                Console.WriteLine("Car will stop ");
            }

            public void sterio()
            {
                Console.WriteLine("Sterio is ON ");
            }
            public void freshner()
            {
                Console.WriteLine("Fresher is ON ");
            }

        }

        public class benz
        {
            public void nthh()
            {
                Console.WriteLine(" ON ");
            }
            public voidbenz()
            {
                Console.WriteLine("nothing");

            }
        }

    }
}
