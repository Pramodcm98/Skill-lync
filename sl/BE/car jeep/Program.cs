using System;

namespace BE
{
    class Program
    {

        public class jeep
        {
            public void key()
            {
                Console.WriteLine("Engine starts on key");
            }
        }
        public class mahindra : jeep
        {
            public void soundac()
            {
                Console.WriteLine("no sound on starting");
            }
        }
        public class jeep2 : jeep
        {
            public void autodrive()
            {
                Console.WriteLine("can choose autopilot mode");
            }
        }

        public static void Main()
        {
            mahindra mdra = new mahindra();
            mdra.key();
            mdra.soundAc();
            jeep2 js = new jeep2();
            js.key();
            js.autodrive();
        }

    }
}


