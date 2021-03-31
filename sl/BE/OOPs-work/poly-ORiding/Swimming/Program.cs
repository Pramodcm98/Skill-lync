using System;

namespace Swimming_Methods
{
    public class Usual    //declaring the Derived class
    {
        public virtual void Swims()
        {
            Console.WriteLine("Swimming by usual method");
        }
    }
    public class butterfly : Usual  //declaring the basic class
    {
        public override void Swims()
        {
            Console.WriteLine("Swimming by Buttefly method");
        }

    }
    public class Swimming
    {
        public static void Main()
        {
            // calling the overriden method
            butterfly Btfly = new butterfly();
            Btfly.Swims();

            // calling the baesd class method
            Usual Usl = (Usual)Btfly;
            Usl.Swims();

        }
    }
}
