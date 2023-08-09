import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch} from 'react-icons/ai';
import { TiDelete} from 'react-icons/ti';
import { FcHighPriority,FcOk} from 'react-icons/fc';


import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function AddEmployerModal(props) {

    const {searchInput ,setSearchInput} =useState("")
    const handleSubmit = () => {
        // Perform the necessary actions with the updated name and time values
        // For example, you can pass them to a parent component via a callback function

        // Close the modal
        props.onHide();
    };

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenterr">Add New Employer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='search-input'>
                  <FloatingLabel controlId="floatingInputGrid1" label="Search for an employee by code">
                    <Form.Control type="text" placeholder="Enter Service Name" value={searchInput} onChange={()=>{}} />
                  </FloatingLabel>
                  <button variant="" className='btn-primary'>Search <AiOutlineSearch className='search-icon'/></button>
                </div>
                <div className='search-result'>
                    <h5 >Employee Found <FcOk/></h5>
                    {/* <h5 >Employee Not Found <FcHighPriority/></h5> */}
                    {/* <h6>Murad Issa Already work </h6> */}
                    <h5>Name : Murad Issa</h5>
                    {/* <button className='btn-primary' onClick={handleSubmit}>Send Request</button> */}
                    <Button variant="primary" onClick={handleSubmit}>Send Request</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                
                <button className='btn-secondary' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddEmployerModal;
