using System;

namespace car
{
    class working
    {
        public static void Main()
        {
            car c = new car();
            c.acceleration();
            c.acceleration("inclined road");
            c.acceleration(200);

        }


        public class car
        {
            public void acceleration()
            {
                Console.WriteLine("The car gives descent acceleration");
            }
            public void acceleration(string RoadType)
            {
                Console.WriteLine("The acceleration changes on " + RoadType);
            }
            public void acceleration(int Load)
            {
                Console.WriteLine("The acceleration reduces on weight above " + Load);
            }

        }
    }
}
