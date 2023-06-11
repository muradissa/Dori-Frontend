import React from 'react';
import { useNavigate  } from "react-router-dom";

import './home.css';
import HomeImg from '../../assets/home-img.jpg';

const Home = () => {
  const navigate = useNavigate ();

  const openLoginPage = () =>{
    navigate("/login")  
  }
  return (
    <div className="home">
      <div className="welcome">
        <div className='wlecome-text'>
            
           <h1>Welcome to Dori </h1>
           {/* <h1>Welcome to our Website! <br/>Convenient Appointment Scheduling at Your Fingertips</h1> */}

            <p>Intelligent Scheduling for Smoother Operations. <br/>Explore our appointment scheduling services.</p> 
        </div>
        
      </div>
      <div className='waves'>
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
      </div>
      <div className="content">
        {/* <div className='waver'></div> */}
        <img src={HomeImg} alt="Image" className="image" />
        <button className="login-button" onClick={()=>openLoginPage()}>Login</button>
      </div>
    </div>
  );
};

export default Home;