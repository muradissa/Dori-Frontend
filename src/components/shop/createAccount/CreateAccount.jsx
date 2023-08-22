import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { FcInfo} from 'react-icons/fc';
// import { AiFillDelete} from 'react-icons/ai';
// import { TiDelete} from 'react-icons/ti';
// import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './createAccount.css'
function CreateAccount() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [email, setEmail] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    // const [image, setImage] = useState("");
    const [profileImage, setProfileImage] = useState(null);



    const handleProfileImageChange = (event) => {
        debugger;
        if( event.target.files[0] !==undefined){
          const file = event.target.files[0];
          setProfileImage(file);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhone1Change = (event) => {
        setPhone1(event.target.value);
    };

    const handlePhone2Change = (event) => {
        setPhone2(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Here, you can access all the captured values.
        const formData = {
          profileImage,
          name,
          type,
          email,
          phone1,
          phone2,
          country,
          city,
          address
        };
    
        console.log(formData);
        // You can perform further actions with the captured form data.
      };
    


  return (
    <div className='create-account'> 

        {/* <div className=''>
            <Form.Group as={Col} md="12" controlId="validationProfileImage">           
              {!profileImage && <img className="shop-info-modal-img" src="/assets/dori-logo.png" alt="Profile Image" />}             
              {profileImage && <img className="shop-info-modal-img" src={URL.createObjectURL(profileImage)} alt="Profile Image" />}
              <Form.Control type="file" accept="image/*" onChange={handleProfileImageChange} placeholder='Choose Image'/>
            </Form.Group>
        </div> */}
        <div  className='create-account-fields'>
            <Form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                <Form.Group as={Col} md="12" controlId="validationProfileImage">           
                {!profileImage && <img className="shop-info-modal-img" src="/assets/dori-logo.png" alt="Profile Image" />}             
                {profileImage && <img className="shop-info-modal-img" src={URL.createObjectURL(profileImage)} alt="Profile Image" />}
                <Form.Control type="file" accept="image/*" onChange={handleProfileImageChange} placeholder='Choose Image' size="sm" style={{maxWidth:"300px",margin:"auto"}}/>
                </Form.Group>
                <div className='input-field'>
                    <FloatingLabel controlId="floatingInputGrid1" label="Name" className='labelll-test'>          
                        <Form.Control type="text" placeholder="Enter Business Name" value={name} onChange={handleNameChange} /> 
                        {/* <FcInfo style={{width:"30px",margin:"auto",scale:"1.6"}}></FcInfo> */}
                    </FloatingLabel>
                </div>

                <div className='input-field' >
                    <FloatingLabel controlId="floatingInputGrid1" label="Business Type">
                        <Form.Control type="text" placeholder="Enter Business Type" value={type} onChange={handleTypeChange} />
                    </FloatingLabel>
                </div>

                <div className='input-field' >
                    <FloatingLabel controlId="floatingInputGrid1" label="Email">
                        <Form.Control type="text" placeholder="Enter Email @" value={email} onChange={handleEmailChange} />
                    </FloatingLabel>
                </div>

                <div  className='input-field'>
                    <FloatingLabel controlId="floatingInputGrid1" label="Phone 1">
                        <Form.Control type="text" placeholder="Enter Phone 1" value={phone1} onChange={handlePhone1Change} />
                    </FloatingLabel>
                </div>

                <div className='input-field' >
                    <FloatingLabel controlId="floatingInputGrid1" label="Phone 2">
                        <Form.Control type="text" placeholder="Enter Phone 2" value={phone2} onChange={handlePhone2Change} />
                    </FloatingLabel>
                </div>

                <div className='input-field' >
                    <FloatingLabel controlId="floatingInputGrid1" label="Country">
                        <Form.Control type="text" placeholder="Enter Country" value={country} onChange={handleCountryChange} />
                    </FloatingLabel>
                </div>

                <div className='input-field' >
                    <FloatingLabel controlId="floatingInputGrid1" label="City">
                        <Form.Control type="text" placeholder="Enter City" value={city} onChange={handleCityChange} />
                    </FloatingLabel>
                </div>

                <div className='input-field' >
                    <FloatingLabel controlId="floatingInputGrid1" label="Address ">
                        <Form.Control type="text" placeholder="Enter Address" value={address} onChange={handleAddressChange} />
                    </FloatingLabel>
                </div>

                <div>
                    <button type='submit'>Save</button>
                </div>
            </Form>
        </div>
        <div className='create-account-image'>
            <img src="/assets/create-account.gif"></img>
        </div>
       
    </div>
  )
}

export default CreateAccount