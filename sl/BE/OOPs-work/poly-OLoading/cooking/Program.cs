using System;

namespace cooking
{
    class thechef
    {
        public static void Main()
        {
            chef cks =new chef();
            cks.cooking();
            cks.cooking("Marriages");
            cks.cooking("christian",50);

        }
      public class chef
      {
      public void cooking()
      {
          Console.WriteLine("He cooks food");
      }
      public void cooking(string occassion)
      {
       Console.WriteLine("Cooks special food for " + occassion);
      }
      public void cooking(string occassion ,int number)
      {
          if(occassion=="muslim" && number >50)
          {
              Console.WriteLine("He cooks biriyani");
          }
          else if (occassion =="christian" && number ==50)
          {
            Console.WriteLine("He cooks cakes");  
          }
          else
          {
            Console.WriteLine("He cooks Vegetarian meals");  
          }

      }
      }
    }
}
