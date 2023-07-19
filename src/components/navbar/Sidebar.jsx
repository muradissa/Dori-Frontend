import React from 'react';
import { useNavigate  } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {AiFillHome,AiTwotoneSetting} from "react-icons/ai";
import {BsFillBookmarkStarFill,
    BsFillInfoCircleFill} from "react-icons/bs";
import {IoNotifications} from "react-icons/io";
import {GrServices} from "react-icons/gr";
import {FaUsers ,FaUmbrellaBeach} from "react-icons/fa";
import {MdNotificationsActive,MdWorkHistory,
  MdBusinessCenter,MdOutlineMiscellaneousServices,MdUpgrade} from "react-icons/md";
import {BiLogOut} from "react-icons/bi";





function Sidebar() {

    const navigate = useNavigate ();
  
    const changeComponent =(selectComponent) =>{
    //   setSelect(selectComponent);
      if(selectComponent ==="Home"){
        navigate("/shop-account");  
      }
      else if(selectComponent ==="Bookings"){
        navigate("/shop-account/bookings");  
      }
      else if(selectComponent ==="Notifications"){
        navigate("/shop-account/notifications");
      }
      else if(selectComponent ==="Shop Info"){
        navigate("/shop-account/shop-info");  
      }
      else if(selectComponent ==="Servicees"){
        navigate("/shop-account/servicees");
      }
      else if(selectComponent ==="Employees"){
        navigate("/shop-account/employees");
      }
      else if(selectComponent ==="Worktime"){
        navigate("/shop-account/worktime");
      }
      else if(selectComponent ==="Vacations"){
        navigate("/shop-account/vacations");
      }
      else if(selectComponent ==="Settings"){
        navigate("/shop-account/shop-settings");
      }
      else if(selectComponent ==="Upgrade Account"){
        navigate("/shop-account/upgrade-account");
      }
      ///shop-account/upgrade-account
    }
  return (
    <div className='sidebar'>
         {/* <Nav defaultActiveKey="/home" className="flex-column"> */}
         <br/>
         <Nav defaultActiveKey="link-11" className="flex-column">
            {/* <Nav.Link href="/shop-account">
                <AiFillHome className='sidebar-icon'/>Home
            </Nav.Link> */}
            <Nav.Link eventKey="link-11" onClick={()=> changeComponent("Home")}>
                <AiFillHome className='sidebar-icon'/>Home
            </Nav.Link>
            <hr/>
            <Nav.Link onClick={()=> changeComponent("Bookings")} eventKey="link-1">
                <BsFillBookmarkStarFill className='sidebar-icon'/>Bookings
            </Nav.Link>
            <Nav.Link onClick={()=> changeComponent("Notifications")} eventKey="link-2">
                <MdNotificationsActive className='sidebar-icon'/>Notifications
            </Nav.Link>
            <hr/>
            <Nav.Link onClick={()=> changeComponent("Shop Info")} eventKey="link-3">
                <BsFillInfoCircleFill className='sidebar-icon'/>Shop Info
            </Nav.Link>
            <Nav.Link onClick={()=> changeComponent("Servicees")} eventKey="link-4">
                <MdOutlineMiscellaneousServices className='sidebar-icon'/>Servicees
            </Nav.Link>
            <Nav.Link onClick={()=> changeComponent("Employees")} eventKey="link-5">
                <FaUsers className='sidebar-icon'/>Employees
            </Nav.Link>
            <Nav.Link onClick={()=> changeComponent("Worktime")} eventKey="link-6">
                <MdWorkHistory className='sidebar-icon'/>Worktime
            </Nav.Link>
            <Nav.Link onClick={()=> changeComponent("Vacations")} eventKey="link-7">
                <FaUmbrellaBeach className='sidebar-icon'/>Vacations
            </Nav.Link>
            <Nav.Link onClick={()=> changeComponent("Settings")} eventKey="link-8">
                <AiTwotoneSetting className='sidebar-icon'/>Settings
            </Nav.Link>

            
            <div className='sidebar-bottom'>
            <hr/>
                
                <Nav.Link onClick={()=> changeComponent("Business Account")} eventKey="link-9">
                    <MdBusinessCenter className='sidebar-icon'/>Business Account
                </Nav.Link>
                <Nav.Link onClick={()=> changeComponent("Upgrade Account")} eventKey="link-10">
                    <MdUpgrade className='sidebar-icon'/>Upgrade
                </Nav.Link>
                <Nav.Link onClick={()=> changeComponent("Logout")} eventKey="link-12">
                    < BiLogOut className='sidebar-icon'/>Logout
                </Nav.Link>
            </div>

            {/* <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link> */}
        </Nav>
    </div>
  )
}

export default Sidebar