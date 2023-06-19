import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

function ShopInfoModal(props) {

  const [validated, setValidated] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }else{
      props.onHide();
    }
    
    setValidated(true);
  };
  

  const handleProfileImageChange = (event) => {
    debugger;
    if( event.target.files[0] !==undefined){
      const file = event.target.files[0];
      setProfileImage(file);
    }
  };


  return (
    <> 
    <Modal size="lg" {...props}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Shop Informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
          <Row className="mb-3">
            {/* Profile Image */}
            <div className='validationProfileImage'>

            
            <Form.Group as={Col} md="12" controlId="validationProfileImage">
              {/* <Form.Label>Profile Image</Form.Label> */}
              
              {!profileImage && <img className="shop-info-modal-img" src="/assets/dori-logo.png" alt="Profile Image" />}
              
              {profileImage && <img className="shop-info-modal-img" src={URL.createObjectURL(profileImage)} alt="Profile Image" />}
              <Form.Control type="file" accept="image/*" onChange={handleProfileImageChange} placeholder='Choose Image'/>
              {/* <input type="file" accept="image/*" onChange={handleProfileImageChange} />
              {profileImage && <img className="shop-info-modal-img" src={URL.createObjectURL(profileImage)} alt="Uploaded" />} */}

              
            </Form.Group>
            </div>
          </Row>
          
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Shop name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Shop name"
                defaultValue="Speed Salon"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Type</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Barber or Dental Clinic or Others..."
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
              
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom033">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email@Email.com" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom044">
              <Form.Label>Phone 1</Form.Label>
              <Form.Control type="text" placeholder="Phone number 1" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom055">
              <Form.Label>Phone 2</Form.Label>
              <Form.Control type="text" placeholder="Phone number 2"  />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Country.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid location.
              </Form.Control.Feedback>
            </Form.Group>

          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    </>
  );
}

export default ShopInfoModal;











// import React,{ useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Modal from 'react-bootstrap/Modal';

// function ShopInfoModal(props) {

//   // const [show, setShow] = useState(props.showModal);
  
//   // const handleClose = () => setShow(false);
//   // const handleShow = () => setShow(true);

//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <> 
//     <Modal size="lg" {...props}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={props.onHide}>
//         Close
//       </Button>
//       <Button variant="primary" onClick={props.onHide}>
//         Save Changes
//       </Button>
//     </Modal.Footer>
//     </Modal>
//     </>
//   );
// }

// export default ShopInfoModal;