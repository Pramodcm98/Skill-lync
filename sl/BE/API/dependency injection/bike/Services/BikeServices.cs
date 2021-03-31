using System.Collections.Generic;
using bike.Models;

namespace bike.Services
{
    public class BikeService
    {
        List<Bike> _bikeList = new List<Bike>();
        public BikeService()
        {
            
        }

        public List<Bike> GetBike()    //for getting the input in Get
        {
            return _bikeList;
        }

        public void AddBike(Bike bike)    // for storing the product we post
        {
            _bikeList.Add(bike);
        }


    }

}