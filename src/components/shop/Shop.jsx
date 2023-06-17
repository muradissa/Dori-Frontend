import React ,{useState} from 'react'
import { useNavigate  } from "react-router-dom";

import './shop.css';
import NavShop from './NavShop';

function Shop() {
    // const [select,setSelect] =useState("newBooking")
    const navigate = useNavigate ();
  
    const changeComponent =(selectComponent) =>{
    //   setSelect(selectComponent);
        if(selectComponent ==="Shop Info"){
        navigate("/shop-account/shop-info");  
      }
      else if(selectComponent ==="Servicees"){
        navigate("/shop-account/servicees");
      }
      else if(selectComponent ==="Employes"){
        navigate("/shop-account/employees");
      }
      else if(selectComponent ==="Worktime"){
        navigate("/shop-account/worktime");
      }
      else if(selectComponent ==="Vacations"){
        navigate("/shop-account/vacations");
      }
      else if(selectComponent ==="Shop Settings"){
        navigate("/shop-account/shop-settings");
      }
    }


  return (
    <div className='shop-account'>
       <NavShop changeComponent={changeComponent}/>
    </div>
  )
}

export default Shop