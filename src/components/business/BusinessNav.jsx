import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import './business.css'
function BusinessNav({changeComponent}) {

    const [businessSection, setPersonalSection] = useState(1);
    const type= "radio";
    const eventHandlerBtns =(selected) =>{
      if(selected === 1){
        setPersonalSection(1)
        changeComponent("Bookings")
      }
      if(selected === 2){
        setPersonalSection(2)
        changeComponent("Notifications")
      }
    //   if(selected === 3){
    //     setPersonalSection(3)
    //     changeComponent("StoreSettings")
    //   }

    
      
    }
  return (
    <div className='navPersonal'>     
        <button className={"btn-radio "+ `${businessSection==1 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(1)}>Bookings</button>
        <button className={"btn-radio "+ `${businessSection==2 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(2)}>Notifications</button>

        {/* <button className={"btn-radio "+ `${businessSection==2 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(3)}>Store Settings</button> */}
    </div>
  )
}

export default BusinessNav