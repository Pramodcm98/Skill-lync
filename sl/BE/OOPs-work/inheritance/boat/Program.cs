using System;

namespace boat
{
    class boatcmpny
    {

        public static void Main()
        {
            SpeedBoat sb = new SpeedBoat();
            sb.start();
            sb.nitro();

            FishingBoat fb = new FishingBoat();
            fb.start();
            fb.headlight();
            fb.FishStand();


        }

        public class boat
        {
            public void start()
            {
                Console.WriteLine("Boat is started");
            }
            public void headlight()
            {
                Console.WriteLine("headlight is turned ON");
            }


        }
        public class SpeedBoat : boat
        {
            public void nitro()
            {
                Console.WriteLine("Goes too fast");
            }

        }
        public class FishingBoat : boat
        {
            public void FishStand()
            {
                Console.WriteLine("Fish stand will get adjusted");
            }
        }
    }
}
