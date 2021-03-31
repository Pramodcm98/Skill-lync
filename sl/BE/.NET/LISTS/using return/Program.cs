using System;


namespace using_return
{
    class Program
    {
        public static void Main()
        {
            using_return a = new using_return();
            int result = a.Add();
            Console.WriteLine(result);


        }
        public class using_return
        {
            public int Add()
            {
                return 5 + 5;
            }
        }
    }
}