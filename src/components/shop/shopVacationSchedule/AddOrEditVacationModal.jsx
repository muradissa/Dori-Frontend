import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch} from 'react-icons/ai';
import { TiDelete} from 'react-icons/ti';
import { FcPrevious,FcNext} from 'react-icons/fc';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default CSS styles


function AddOrEditVacationModal(props) {
    const fakeDataEmployers=[{ id: 2123, name: 'John Vosrs' },{ id: 1234, name: 'Alice Smith' },{ id: 5678, name: 'Bob Johnson' },{ id: 9876, name: 'Emily Davis' },{ id: 6543, name: 'Sophia Wilson' }];

    //const [vacationType,setVacationType] = useState(props.vacationType); // "add" or "edit"
    const {searchInput ,setSearchInput} =useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEmployess, setSelectedEmployess] = useState([]);

    const handleSubmit = () => {
        props.onHide();
    };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // get names and ids
  const getAllEmployees = () =>{

  }

  const CheckIfSelectEmployer =(employerId) =>{
    if (!selectedEmployess.includes(employerId)){
        return "not-selected";
    }else{
        return "selected"
    }
  }

  const handleClickSelectEmployer = (employerId) =>{
    if (!selectedEmployess.includes(employerId)) {
        setSelectedEmployess([...selectedEmployess, employerId]);
    }else{
        const updatedItems = selectedEmployess.filter(existingItem => existingItem !== employerId);
        setSelectedEmployess(updatedItems);
    }
  }


    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenterr">{props.vacationType} Vacation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Vacation from-to :</h5>

                <div className='vacation-dates-from-to'>
                    <div className="datepicker-choosing-date ">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date"
                            className="datepicker-input"
                        />
                    </div>
                    <div className="datepicker-choosing-date ">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date"
                            className="datepicker-input"
                        />
                    </div>
                </div>
                <hr></hr>
                <h5>Employess :</h5>
                <div  className='vacation-employess'>
                    {
                        fakeDataEmployers.map(employer => 
                            <div className={`vacation-employess-item-${CheckIfSelectEmployer(employer.id)}`} onClick={()=>{handleClickSelectEmployer(employer.id)}}>
                                {employer.name}
                            </div>
                        )
                    }
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button className='btn-primary' onClick={handleSubmit}>{props.vacationType === "Edit"? 'Save Changes':'Add Vacation'}</button>
                <button className='btn-secondary' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddOrEditVacationModal