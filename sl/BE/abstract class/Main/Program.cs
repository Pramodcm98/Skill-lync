using System;

namespace abstract_class
{
    class abstct
    {
        public static void Main()
        {
        Myclass2 mycls = new Myclass2();
        mycls.test2();
        mycls.test3();
        mycls.test1();
        mycls.test10();
        
        }

        public abstract class Myclass
        {
            public void test1()
            {
                Console.WriteLine("this is test 1 of abstract class");
            }
            public void test10()
            {
                Console.WriteLine("this is test 10s of  Myclass2");
            }

        }
        public class Myclass1 : Myclass
        {
            public void test2()
            {
                Console.WriteLine("this is test 2 of  Myclass1");
            }
        }

        public class Myclass2 : Myclass1
        {
            public void test3()
            {
                Console.WriteLine("this is test 3 of  Myclass2");
            }
        }

    }

}
