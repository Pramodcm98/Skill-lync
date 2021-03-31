using System;

namespace hotel
{
    class FiveStarHotel
    {

        public static void Main()
        {
            AlFaham Ck = new AlFaham ();
            Ck.soup();
            Ck.chicken();
            Ck.kubboos();

            Meals Ms = new Meals();
           
            Ms.SpclMeals();
            Ms.sweets();
            


        }

        public class LunchTime
        {
            public void soup()
            {
                Console.WriteLine("Soup is served");
            }
            public void sweets()
            {
                Console.WriteLine("Starter Sweets are served");
            }


        }
        public class AlFaham : LunchTime
        {
            public void chicken()
            {
                Console.WriteLine("well cooked Alfaham chicken is served");
            }
            public void kubboos()
             {
                Console.WriteLine("kubboos is served");
            }

        }
        public class Meals :LunchTime
        {
            public void SpclMeals()
            {
                Console.WriteLine("Special Meals will be served");
            }
        }
    }
}
