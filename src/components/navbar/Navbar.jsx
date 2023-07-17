import React, { useState } from 'react';
import './navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Logo  from '../../assets/dori-logo-nobackground.png';
import {AiOutlineMenu} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import {MdSettings,MdBusinessCenter} from 'react-icons/md';
import {BsPersonCircle} from 'react-icons/bs';
import {MdStoreMallDirectory} from 'react-icons/md';
import { useNavigate  } from "react-router-dom";





const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate ();

  const openRegisterPage = () =>{
    navigate("/register")  
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navBar" style={{}}>
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <button className="signup-button" onClick={openRegisterPage}>Sign Up</button>

        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={<AiOutlineMenu style={{scale:"1.5"}}/>}
            menuVariant="light"
            
          >
            <NavDropdown.Item href="/personal-account"><BsPersonCircle style={{scale:"1.2"}}/> Personal Account </NavDropdown.Item>
            <NavDropdown.Item href="/business-account"> <MdBusinessCenter style={{scale:"1.2"}}/> Business Account </NavDropdown.Item>
            <NavDropdown.Item href="/shop-account"> <MdStoreMallDirectory style={{scale:"1.2"}}/> Shop Account </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.3"><MdSettings style={{scale:"1.2"}}/> Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <BiLogOut style={{scale:"1.2"}}/> Logout 
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </nav>
  );
};

export default Navbar;
