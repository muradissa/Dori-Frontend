import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Loader from '../global/Loader';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';

import { getNames } from 'country-list';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './register.css';

const countries = getNames();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  /*** Error Message***/ 
  const [openEmailErrorMessage , setOpenEmailErrorMessage] = useState(false);
  const [openPhoneErrorMessage, setOpenPhoneErrorMessage] = useState(false);
  const [openPasswordErrorMessage, setOpenPasswordErrorMessage] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenEmailErrorMessage(false);
    setOpenPhoneErrorMessage(false);
    setOpenPasswordErrorMessage(false);
  };


  useEffect(() => {
    if (userInfo) {
      navigate('/');
      alert("useEffect if userInfo")
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(`firstName: ${firstName} || lastName: ${lastName} || birthday: ${birthday} || country: ${country} || address: ${address}`)
    console.log(`phoneNumber: ${phoneNumber} || email: ${email} || password: ${password} || confirmPassword: ${confirmPassword}`)

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      setOpenPasswordErrorMessage(true);
    } else {
      try {
        //const res = await register({ firstName,lastName, email, password }).unwrap();
        const res = await register({ firstName ,lastName, email, password ,confirmPassword,phoneNumber , country,address ,birthday }).unwrap();

        //  
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        alert(err.data?.message || err.error)
      }
    }
  };


  // Country Functions --------------------------------
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        setCountry(selectedCountry);
        setSelectedCountry(data.country_name);
      })
      .catch((error) => {
        console.error('Error fetching geolocation:', error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    const selectedCountry = countries.find(
      (country) => country.value === selectedCountryCode
    );
    setSelectedCountry(selectedCountry);
    setCountry(selectedCountry);
  };

// firstName lastName birthday country address      , email password phoneNumber       employerCode ,accountType

  return (
    <div className='register'>
      <h1>Register</h1>
      
      <Form onSubmit={submitHandler}>

        <div className='register-body'>
      


          <div className='register-left'>

            <Form.Group controlId="firstName" className='register-label-input'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName" className='register-label-input'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="birthday" className='register-label-input'>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="country" className='register-label-input'>
              <Form.Label>Country</Form.Label>
              <Form.Select
                as="select"
                value={selectedCountry ==='' ? "" : selectedCountry}
                onChange={handleCountryChange}
                
              >
                {countries.map((country) =>( 
              <option key={country} value={country}>{country}</option>))}
              </Form.Select>

            </Form.Group>

            <Form.Group controlId="address" className='register-label-input'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>

          </div>
          <div className='register-right'>
            <Form.Group controlId="phoneNumber" className='register-label-input'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className='register-label-input'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className='register-label-input'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className='register-label-input'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
          </div>
        </div>
        <Button variant="primary" type="submit">
          Register
        </Button>
        {isLoading && <Loader />}
      </Form>
      {/* <Form onSubmit={submitHandler}>
        <Form.Group className='my-3' controlId='name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-3' controlId='name'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter last name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Select 
          aria-label="Default select example"
          value={selectedCountry ==='' ? "" : selectedCountry}
          onChange={handleCountryChange}

          >
            {countries.map((country) =>( 
              <option key={country} value={country}>{country}</option>))}
        </Form.Select>

        <Button type='submit' variant='primary' className='mt-3'>
          Register
        </Button>

        {isLoading && <Loader />}
      </Form> */}

      <Row className='py-3'>
        <Col>
          Already have an account? <Link to={`/login`}>Login</Link>
        </Col>
      </Row>
      
      <Snackbar open={openEmailErrorMessage} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This email address is already registered
        </Alert>
      </Snackbar>

      <Snackbar open={openPhoneErrorMessage} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This phone number is already registered
        </Alert>
      </Snackbar>

      <Snackbar open={openPasswordErrorMessage} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Passwords do not match!
        </Alert>
      </Snackbar>

    </div>
  );
};

export default Register;