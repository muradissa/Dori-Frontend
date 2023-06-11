import React ,{useState} from 'react'
import NavPersonal from './NavPersonal'
import NewBooking from './newBooking/NewBooking';
import MyBookings from './myBookings/MyBookings';
function Personal() {

  const [select,setSelect] =useState("newBooking")

  const changeComponent =(selectComponent) =>{
    setSelect(selectComponent);
  }
  return (
    <div>
        <NavPersonal changeComponent={changeComponent}/>
        {select ==="newBooking" ? <NewBooking/> : <MyBookings/>}
    </div>
  )
}

export default Personal