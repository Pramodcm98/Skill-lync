using System;

namespace DOUBLING
{
        public class Teamaking
    {
        public static void Main()
        {
            // calling the overriden method
            Multi2 Mlt = new Multi2();
            Mlt.doubling(10);

            // calling the baesd class method
            AddinSame AdSm = (AddinSame)Mlt;
            AdSm.doubling(10);

        }
    }

    public class AddinSame    //declaring the Derived class
    {
        public virtual void doubling(int num)
        {
            Console.WriteLine("DOUBLE = " + num+num);
        }
    }
    public class Multi2 : AddinSame    //declaring the basic class
    {
        public override void doubling(int num)
        {
            Console.WriteLine("DOUBLE = " + num*2);
        }

    }
//     public class Teamaking
//     {
//         public static void Main()
//         {
//             // calling the overriden method
//             Multi2 Mlt = new Multi2();
//             Mlt.doubling(10);

//             // calling the baesd class method
//             AddinSame AdSm = (AddinSame)Mlt;
//             AdSm.doubling(10);

//         }
//     }
}
