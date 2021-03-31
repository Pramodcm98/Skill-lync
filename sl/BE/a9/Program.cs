using System;


namespace a9
{
    public class mani
    {
        public static void Main()
        {
            pramod p = new pramod();
            annapoorini a = new annapoorini();
            sai s = new sai();
            vasanthi v = new vasanthi();

            p.day1();
            p.concept();
            s.day1();
            s.concept();
            v.day1();
            v.concept();
            a.day1();
            a.concept();

        }   
        public class learning
        {
            public void day1()
            {
                Console.WriteLine("Oops concept");
            }
        }

        public class pramod : learning
        {
            public void concept()
            {
                Console.WriteLine("Encapsulation");
                Console.WriteLine("*****Abstraction*****");
            }

        }

        public class vasanthi : learning
        {
            public void concept()
            {
                Console.WriteLine("Polymorphism");
            }

        }

        public class annapoorini : learning
        {
            public void concept()
            {
                Console.WriteLine("Abstraction");
            }

        }

        public class sai : learning
        {
            public void concept()
            {
                Console.WriteLine("Inheritance");
            }

        }


    }
}