using System;

namespace csharp
{
    class practice
    {
        // public static void Main()  //entry point
        // {
        //     yamaha y = new yamaha();
        //     y.start();
        //     y.engineSound();
        //     hero h = new hero();
        //     h.startImmediate();
        //     h.sound();
        // }
        //inheritance
        // Master class or parent class
        public class bike
        {
            public void start()
            {
                Console.WriteLine("Bike started!!!");
            }

            public void startImmediate()
            {
                Console.WriteLine("Bike started immediately!!!");
            }
        }

        //yamaha asked me to build a bike
        public class yamaha : bike
        {

            public void engineSound()
            {
                Console.WriteLine("daba daba daba!!!");
            }

        }
        public class hero : bike
        {
            public void sound()
            {
                Console.WriteLine("no engine sound");
            }
        }

    

    //NEW
    
        public static void Main()
        {
            suzuki s = new suzuki();
            s.start();
            s.nitro();
            s.stop();

            kawasaki ki =new kawasaki();
            ki.start();
            ki.stop();
            ki.shine();

              //entry point
        
            yamaha y = new yamaha();
            y.start();
            y.engineSound();

            hero h = new hero();
            h.startImmediate();
            h.sound();
        }

        
        
        public class boat
        {
            public void start()
            {
                Console.WriteLine("start when pressing");
            }
            public void nitro()
            {
                Console.WriteLine("use nitro");
            }
            public void stop()
            {
                Console.WriteLine("stop on press");
            }
        }
        //suzuki asked me to build a boat
        public class suzuki : boat
        {
            public void noroof()
            {
                Console.WriteLine("no roof on pressing");
            }
        }

        //kawasaki asked for boat
        public class kawasaki : boat
        {
            public void shine()
            {
                Console.WriteLine("shine on pressing");
            }
        }


    }

}





