import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch} from 'react-icons/ai';
import { TiDelete} from 'react-icons/ti';
import { FcPrevious,FcNext} from 'react-icons/fc';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

/*** Edit */
function EditEmployerModal(props) {
    const {searchInput ,setSearchInput} =useState("");
    const [status, setStatus] = useState("");
    const [avatar, setAvatar] = useState(parseInt(props.employer.avatar));
    const handleSubmit = () => {

        props.onHide();
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleDelete = () => {
        alert(`Are you sure you want to delete`);
        props.onHide();
    };

    const  nextAvatar= async() =>{
        if(avatar === 12){
            setAvatar(1)
        }else{
            setAvatar(avatar+1)
        }
    }
    const previousAvatar= async() =>{
        if(avatar === 1){
            setAvatar(12)
        }else{
            setAvatar(avatar-1)
        }
    }
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenterr">Edit Employer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='edit-employer-info'>
                    <div className='edit-employer-info-slide-img'>
                        <button onClick={previousAvatar}><FcPrevious className='edit-employer-info-icon'/> </button>
                            <img src={`/assets/avatar${avatar}.png`} style={{width:"70px"}} alt=""/>
                        <button onClick={nextAvatar}><FcNext  className='edit-employer-info-icon'/></button>
                        
                    </div>
                    <div>
                        <h5>Name : {props.employer.name}</h5>
                        <h5>Code : {props.employer.code}</h5>
                    </div>
                </div>
                    
                    {/* <h5>{props.employer.phone}</h5>
                    <h5>{props.employer.email}</h5>
                    <h5>{props.employer.birthday}</h5> */}

                    <div className='edit-employer-status-select'>
                        <FloatingLabel controlId="floatingSelectGrid2" label="Employess Status">
                            <Form.Select  aria-label="Default select example" value={status} onChange={handleStatusChange}>
                                <option key={1} value="Approved">Approved</option>
                                <option key={2} value="Candeled">Candeled</option>
                                <option key={3} value="Suspendeing">Suspendeing</option>
                                <option key={4} value="Waiting">Waiting</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    
                    <Button className='employer-edit-delete-btn' variant="danger" onClick={handleDelete}>Delete</Button>

            </Modal.Body>
            <Modal.Footer>
                <button className='btn-primary' onClick={props.onHide}>Save Changes</button>
                <button className='btn-secondary' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditEmployerModal