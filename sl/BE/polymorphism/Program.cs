using System;

namespace polymorphism            //overloading - compile time polymorphism
{
    class poly
    {
        public static void Main()
        {
            human actn = new human();
            actn.run();
            actn.run("hundredM");
            alien aln = new alien();
            aln.run("eightH",25);
        }
        public class human
        {
            public void run()    //loading
            {
                Console.WriteLine("human starts to run");//
            }
            public void run(string track)    //overloading run
            {
                Console.WriteLine("superfast on " + track);
            }
        }
        
        public class alien : human  //inheriting
        {
            public void run(string type, int age)     //overloading run
            {
                if (type == "big" && age > 25)
                {
                    Console.WriteLine("super jumping");
                }
                else if (type == "youth" && age == 25)
                {
                    Console.WriteLine("medium jumping");
                }
                else
                {
                    Console.WriteLine("no jumping");
                }
            }

        }

    }

}

