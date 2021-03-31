using System;
using System.Collections.Generic;

namespace school
{
    class THESCHOOL
    {
        public static void Main()

        {
            PvtSchool BS = new PvtSchool();
            {
                BS.Std = 12;
                BS.department = "Biology Science";
                BS.strength = 60;
                BS.division = "A";
            }
            PvtSchool CS = new PvtSchool();
            {
                CS.Std = 12;
                CS.department = "Computer Science";
                CS.strength = 62;
                CS.division = "A";

            }
            PvtSchool C = new PvtSchool();
            {
                C.Std = 12;
                C.department = "Commerce";
                C.strength = 65;
                C.division = "A";


            }
            PvtSchool H = new PvtSchool();
            {
                H.Std = 12;
                H.department = "Humanities";
                H.strength = 60;
                H.division = "A";


            }

            List<PvtSchool> hse = new List<PvtSchool>();
            hse.Add(BS);
            hse.Add(CS);
            hse.Add(C);
            hse.Add(H);

            foreach(PvtSchool schl in hse )
            {
                Console.WriteLine("STD = {0}, Department = {1}, Strength = {2}, Division = {3}" ,
                schl.Std,schl.department,schl.strength,schl.division);
                
            }


        }

        public class PvtSchool
        {
            public int Std { get; set; }
            public string department { get; set; }
            public int strength { get; set; }
            public string division { get; set; }


        }
       
    }
}
