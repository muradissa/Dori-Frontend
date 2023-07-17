import React, { useState , useEffect} from 'react';
import { Link, useNavigate  } from "react-router-dom";
import {SiGmail} from  'react-icons/si';
import './login.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate ();
  const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData
  const [country, setCountry] = useState('');

  const loginEventHandler = async () =>{
      console.log(email)
      console.log(password)
      console.log(formData)
      alert("Login")

      try {
        setError("")
        // setLoading(true)
        // await login(data.get('email'), data.get('password'))
        navigate("/personal-account")  
      } catch {
        setError("Failed to log in")
      }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.country_name);
      })
      .catch((error) => {
        console.error('Error fetching geolocation:', error);
      });
  }, []);

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Your country: {country}</p>

      <div className="login-options">
        <p>Login with:</p>
        <button className="btn btn-secondary">Gmail </button>
        <button className="btn btn-secondary">iCloud</button>
        <button className="btn btn-secondary">Twitter</button>
      </div>
      <form onSubmit={loginEventHandler}>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input type="text" id="email" name="email" className="form-control"  value={email} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='password' className="form-control" value={password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <br></br>
        <a href="#" className="forgot-password">Forgot Password?</a>
        <br></br>
        <h6>New User ? <a href="#">Register</a></h6>
        {/* <h6>Already have an account ? <a href="#">l=Login</a></h6> */}

      </form>
    </div>
  );
};

export default Login;