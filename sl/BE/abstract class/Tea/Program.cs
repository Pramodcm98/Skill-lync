using System;

namespace Tea
{
    class Program
    {
        public static void Main()
        {
            NormalTea NT = new NormalTea();
            NT.teapowder();
            NT.sugar();
            NT.teapowder();
            NT.badam();
            NT.chocolatepowder();


            // specialTea ST = new specialTea();
            // ST.teapowder();
            // ST.badam();
            // ST.chocolatepowder();


        }
        public abstract class products
        {
            public void teapowder()
            {
                Console.WriteLine("tea powder is added");
            }
            public abstract void chocolatepowder();
        }
        public class specialTea : products
        {
            public void badam()
            {
                Console.WriteLine("badam powder is added");
            }
            public override void chocolatepowder()
            {
                Console.WriteLine("chocolate powder is added");
            }
        }

        public class NormalTea : specialTea
        {
            public void sugar()
            {
                Console.WriteLine("sugar is added");
            }
        }


    }
}
