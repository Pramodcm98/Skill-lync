using System;

namespace BE
{
    class vehicle
    {
        public static void Main()
        {
            mahindra mdra = new mahindra();
            mdra.key();
            mdra.soundAc();
            
            jeeps js = new jeeps();
            js.key();
            js.autodrive();
        }

        public class jeep
        {
            public void key()
            {
                Console.WriteLine("Engine starts on key");
            }
        }
        public class mahindra : jeep
        {
            public void soundAc()
            {
                Console.WriteLine("no sound on starting", "turn the AC on");
            }
        }
        public class jeeps : jeep
        {
            public void autodrive()
            {
                Console.WriteLine("can choose autopilot mode");
            }
        }

    }
}


