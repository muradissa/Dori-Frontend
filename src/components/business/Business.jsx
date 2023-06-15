import React ,{useState} from 'react';
import BusinessNav from './BusinessNav';
import Bookings from './bookings/Bookings';
import Notifications from './notifications/Notifications';


function Business() {
  const [select,setSelect] =useState("Bookings")

  const changeComponent =(selectComponent) =>{
    setSelect(selectComponent);
  }
  return (
    <div>
        <BusinessNav changeComponent={changeComponent}/>
        {select ==="Bookings" ? <Bookings/> : <Notifications/>}
    </div>
  )
}

export default Business