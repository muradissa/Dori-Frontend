import React ,{useState} from 'react'
import NavPersonal from './NavPersonal'
import NewBooking from './newBooking/NewBooking';
import MyBookings from './myBookings/MyBookings';
import { useNavigate  } from "react-router-dom";

function Personal() {

  const [select,setSelect] =useState("newBooking")
  const navigate = useNavigate ();

  const changeComponent =(selectComponent) =>{
    setSelect(selectComponent);
      if(selectComponent ==="newBooking"){
      navigate("/personal-account/newbooking");  
    }
    else if(selectComponent ==="myBookings"){
      navigate("/personal-account/mybookings");
    }
  }

  return (
    <div>
        <NavPersonal changeComponent={changeComponent}/>
        {/* {select ==="newBooking" ? <NewBooking/> : <MyBookings/>} */}
    </div>
  )
}

export default Personal