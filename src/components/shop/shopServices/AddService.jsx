

import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function AddService(props) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [nameUpdated, setNameUpdated] = useState("");
    const [timeUpdated, setTimeUpdated] = useState("");
    const [initParameters, setInitParameters] = useState(false);



    // useEffect( ()=>{
    //     if(props.serviceItem !==null && !initParameters){
    //         setName(props.serviceItem.name)
    //         setTime(props.serviceItem.time)
    //         setInitParameters(true)
    //     }
        
    // })

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSubmit = () => {
        // Perform the necessary actions with the updated name and time values
        // For example, you can pass them to a parent component via a callback function

        // Close the modal
        props.onHide();
    };

    const generateTimeOptions = (start, end, step) => {
      const options = [];
      for (let i = start; i <= end; i += step) {
        options.push(
          <option key={i} value={`${i}min`}>{`${i} min`}</option>
        );
      }
      return options;
    };
    const timeOptions = generateTimeOptions(5, 240, 5);

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenterr">New Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className='service-modal-body'>

              <div >
                <FloatingLabel controlId="floatingInputGrid" label="Service Name">
                  <Form.Control type="text" placeholder="Enter Service Name" value={name} onChange={handleNameChange} />
                </FloatingLabel>
              </div>
              <div >
                <FloatingLabel controlId="floatingSelectGrid" label="Service Time">
                  <Form.Select  aria-label="Default select example" value={time} onChange={handleTimeChange}>
                    {timeOptions}
                  </Form.Select>
                </FloatingLabel>
              </div>

          </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn-primary' onClick={handleSubmit}>Add Service</button>
        <button className='btn-secondary'onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddService;