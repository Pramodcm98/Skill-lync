using system;

namespace program;
{
    class car
    {
        public static void Main()
        {
            Maruthi mrthi = new Maruthi();

            mrthi.goodlook();
            mrthi.goodlook("swift", 2020);
            mrthi.autobraking();
            mrthi.autopilot();

            honda hnd = new honda();
            hnd.radio();
            

            hondacity hndcity = (hondacity)hnd;
            hndcity.radio();
            

        }
        public class basicCar
        {
            public void start()
            {
                Console.WriteLine("The car will start");
            }
            public void stop()
            {
                Console.WriteLine("The car will stop");
            }
        }

        public abstract class premium
        {
            public void suspension()
            {
                Console.WriteLine("The car will have good suspension");
            }
            public abstract void autobraking();
        }

        interface topend
        {
            void autopilot();
        }

        public class Maruthi : premium, topend
        {
            public void goodlook()
            {
                Console.WriteLine("the maruthi car will have good look");
            }
            public void goodlook(string model, int year)    //overloading
            {
                if (model == "swift" && year == 2020)
                {
                    Console.WriteLine("The maruthi susuki- Swift car will have good look");
                }
                else
                {
                    Console.WriteLine("The maruthi susuki car will have good look");
                }
            }

            public override void autobraking()
            {
                Console.WriteLine("The maruthi car willhave auto braking");
            }
            public void autopilot()
            {
                Console.WriteLine("The maruthi car will have autopilot mode");
            }
        }
        public class honda 
        {
            public virtual void radio()
            {
                Console.WriteLine("The car will have Radio setup");
            }
        }
        public class hondacity : honda
        {
            public override void radio()
            {
                Console.WriteLine("The car will have the latest FM Radio setup");
            }

        }
    }
}

