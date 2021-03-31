using System.Collections.Generic;
using mobile.Model;

namespace mobile.Service
{
    public class MobileService
    {
        List<Mobile> _mobileList = new List<Mobile>();
        public MobileService()
        {

        }

        public List<Mobile> GetMobile()
        {
            return _mobileList;
        }

        public void AddMobile(Mobile mobile)
        {
            _mobileList.Add(mobile);
        }


    }
}