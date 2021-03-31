using System;

namespace BE
    
class car_company
{
    public static void Main()
    {
        maruti m = new maruti();
        m.start();
        m.topOpen();

        jeeps js = new jeeps();
        js.autodrive();
    }
    
    public class car    //making a main class car
    {
        public void start()
        {
            Console.WriteLine("Car started");
        }
    }

    public class maruti: car
    {
        public void topOpen()
        {
            Console.WriteLine("Car top opened");
        }
    }
    public class jeeps : car
        {
            public void autodrive()
            {
                Console.WriteLine("can choose autopilot mode");
            }
        }
       
}

   