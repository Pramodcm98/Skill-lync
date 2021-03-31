using System;

namespace making_tea
{

    public class Teamaking
    {
        public class OldShop    //declaring the basic class
        {
            public virtual void teamaking()
            {
                Console.WriteLine("Tea making using normal method");
            }
        }
        public class NewShop : OldShop   //declaring the Derived class
        {
            public override void teamaking()
            {
                Console.WriteLine("Tea making using Machine");
            }

        }


        public static void Main()
        {
            // calling the overriden method
            NewShop Mchn = new NewShop();
            Mchn.teamaking();

            // calling the baesd class method
            OldShop Nrml = (OldShop)Mchn;
            Nrml.teamaking();

        }
    }
}
