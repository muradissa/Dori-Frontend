import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";

import './login.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [error, setError] = useState("")
  const navigate = useNavigate ()
    const loginEventHandler = async () =>{
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
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={loginEventHandler}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>

        <div className="login-options">
          <p>Login with:</p>
          <button className="btn btn-secondary">Gmail</button>
          <button className="btn btn-secondary">iCloud</button>
          <button className="btn btn-secondary">Twitter</button>
        </div>

        <a href="#" className="forgot-password">Forgot Password?</a>
      </form>
    </div>
  );
};

export default Login;