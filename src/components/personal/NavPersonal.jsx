import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import './personal.css'
function NavPersonal({changeComponent}) {

    const [personalSection, setPersonalSection] = useState(1);
    const type= "radio";
    const eventHandlerBtns =(selected) =>{
      if(selected ===1){
        setPersonalSection(1)
        changeComponent("newBooking")
      }
      if(selected ===2){
        setPersonalSection(2)
        changeComponent("myBookings")
      }
      
    }
  return (
    <div className='navPersonal'>     
        <button className={"btn-radio "+ `${personalSection==1 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(1)}>New Reservation</button>
        <button className={"btn-radio "+ `${personalSection==2 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(2)}>My Reservation</button>
    </div>
  )
}

export default NavPersonal