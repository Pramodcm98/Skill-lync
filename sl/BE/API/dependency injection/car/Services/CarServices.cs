
using System.Collections.Generic;
using car.Models;

namespace car.Services
{
    public class CarServices
    {
        List<Car> _carList = new List<Car>();
        public CarServices()
        {

        }

        public List<Car> GetCars()
        {
            return _carList;
        }

        public void AddCar(Car car)
        {
              _carList.Add(car);
        } 

    }
}
