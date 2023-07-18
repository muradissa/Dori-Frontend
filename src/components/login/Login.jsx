import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../global/Loader';

import {SiGmail} from  'react-icons/si';
import './login.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// test@test.com
const Login = () => {
  const navigate = useNavigate ();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  // const loginEventHandler = async () =>{

  //     alert("Login")

  //     try {
  //       setError("")
  //       setLoading(true)
  //       await login(data.get('email'), data.get('password'))
  //       navigate("/personal-account")  
  //     } catch {
  //       setError("Failed to log in")
  //     }
  // }

  const loginEventHandler = async (e) => {

    alert(email)
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  return (
    <div className="login-container">
      <h1>Login</h1>

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
        {/* <h6>New User ? <a href="/register">Register</a></h6> */}
        <Row className='py-3'>
          <Col>
            Don't have account? <Link to={`/register`} >Register</Link>
          </Col>
        </Row>
        {/* <h6>Already have an account ? <a href="#">l=Login</a></h6> */}
        {isLoading && <Loader />}

      </form>
    </div>
  );
};

export default Login;