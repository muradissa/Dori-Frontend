import React ,{useState} from 'react';
import { useNavigate  } from "react-router-dom";

import BusinessNav from './BusinessNav';
import Bookings from './bookings/Bookings';
import Notifications from './notifications/Notifications';


function Business() {
  const [select,setSelect] =useState("Bookings");
  const navigate = useNavigate ();


  const changeComponent =(selectComponent) =>{
    setSelect(selectComponent);
    if(selectComponent ==="Bookings"){
      navigate("/business-account/bookings");  
    }
    else if(selectComponent ==="Notifications"){
      navigate("/business-account/notifications");
    }
  }
  return (
    <div>
        <BusinessNav changeComponent={changeComponent}/>
        {/* {select ==="Bookings" ? <Bookings/> : <Notifications/>} */}
        <div>
          Create Business Application
        </div>
    </div>
  )
}

export default Business