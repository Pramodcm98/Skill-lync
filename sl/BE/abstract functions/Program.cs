using System;

namespace abstract_functions
{
    class Mybikes
    {
        public static void Main()
        {
            yamaha Y = new yamaha();
            //Y.start(Y.name, Y.modelno);
            Y.start();
            Y.nitro();
            Suzuki S = new Suzuki();
            //S.start(S.name, S.modelno);
            S.start();
            S.racingmode();


        }
        public abstract class bikes
        {
           // public void start(string name, int modelno)
            public void start()
            {
                //Console.WriteLine("The bike will start & its name = "+ name +" model number = "+ modelno);
                Console.WriteLine("The bike will start");
            }
            public abstract void nitro();    //abstract function----here only declared
        }

        public class yamaha : bikes
        {
            // public string name = "MT";
            // public int modelno = 2019;
            public void sound()
            {
                Console.WriteLine("YAMAHA have good sound");
            }
            public override void nitro()    //defining abstract functions
            {
                Console.WriteLine("YAMAHA bike will have nitro");
            }
        }
        public class Suzuki : yamaha
        {
            public void racingmode()
            {
                Console.WriteLine("SUZUKI bikes will have racing mode");
            }
        }


     
    }
}
