using System;

namespace poly__overriding
{
    class myoops
    {
        public static void Main()
        {
            derivedclass d = new derivedclass();
            d.sound();
            baseclass b = (baseclass)d;
            b.sound();

        }
        //we have to create a base and derived class 
        public class baseclass    //created a base class
        {
            public virtual void sound()   //sound is the method ie, aim 
            {
                Console.WriteLine("sound made sound by speaking");
            }
        }
        public class derivedclass : baseclass
        {
            public override void sound()
            {
                Console.WriteLine("sound made sound by shouting");
            }

        }



    }
}
