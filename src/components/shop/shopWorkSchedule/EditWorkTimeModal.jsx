import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import TimePicker from 'react-bootstrap/TimePicker';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';


function EditWorkTimeModal(props) {
  const [openTime, setOpenTime] = useState(props.workTimeItem.open);
  const [closeTime, setCloseTime] = useState(props.workTimeItem.close);

  const handleOpenTimeChange = (time) => {
    setOpenTime(time);
  };

  const handleCloseTimeChange = (time) => {
    setCloseTime(time);
  };

  const handleSubmit = () => {
    // Perform the necessary actions with the updated openTime and closeTime values
    // For example, you can pass them to a parent component via a callback function

    // Close the modal
    props.onHide();
  };


  const generateTimeOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i += 1) {
      options.push(
        <option key={i} value={i<10 ? `0${i}`:`${i}`}>{i<10 ? `0${i}`:`${i}`}</option>
      );
    }
    return options;
  };

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenterr">{props.workTimeItem.day}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* <input autoComplete='off' type='number' inputMode='numeric' max="24" min={0}></input> */}
     

        <div className="worktime-modal-body">
          <h6>Worktime</h6>
          <div className='edit-worktime-open-close'>
            
            <div className='edit-worktime-open-close-row'>
              <span>Open </span>
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,23)}
              </Form.Select>
              <span> : </span>
              
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,59)}
              </Form.Select>
            </div>
            <div className='edit-worktime-open-close-row'>
              <span>Close </span>
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,23)}
              </Form.Select>
              <span> : </span>
              
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,59)}
              </Form.Select>
            </div>
          </div>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch1"
              label="Holiday"
            />
          
          </Form>
          <hr/>
          <h6>Break time</h6>
          <div className='edit-worktime-open-close'>
            
            <div className='edit-worktime-open-close-row'>
              <span>From </span>
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,23)}
              </Form.Select>
              <span> : </span>
              
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,59)}
              </Form.Select>
            </div>
            <div className='edit-worktime-open-close-row'>
              <span>To </span>
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,23)}
              </Form.Select>
              <span> : </span>
              
              <Form.Select className='select-time' aria-label="00">
                {generateTimeOptions(0,59)}
              </Form.Select>
            </div>

          </div>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch2"
              label="No Break"
            />
          
          </Form>
          
        
         
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn-primary' onClick={handleSubmit}>Save Changes</button>
        <button className='btn-secondary' onClick={props.onHide}>Close</button>
    
      </Modal.Footer>
    </Modal>
  );
}

export default EditWorkTimeModal;























// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// // import TimePicker from 'react-bootstrap/TimePicker';
// import TimePicker from 'react-time-picker';
// import DatePicker from 'react-date-picker';


// function EditWorkTimeModal(props) {
//   const [openTime, setOpenTime] = useState(props.workTimeItem.open);
//   const [closeTime, setCloseTime] = useState(props.workTimeItem.close);

//   const handleOpenTimeChange = (time) => {
//     setOpenTime(time);
//   };

//   const handleCloseTimeChange = (time) => {
//     setCloseTime(time);
//   };

//   const handleSubmit = () => {
//     // Perform the necessary actions with the updated openTime and closeTime values
//     // For example, you can pass them to a parent component via a callback function

//     // Close the modal
//     props.onHide();
//   };


//   const generateTimeOptions = (start, end) => {
//     const options = [];
//     for (let i = start; i <= end; i += 1) {
//       options.push(
//         <option key={i} value={i<10 ? `0${i}`:`${i}`}>{i<10 ? `0${i}`:`${i}`}</option>
//       );
//     }
//     return options;
//   };

//   return (
//     <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">New Service</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//       {/* <input autoComplete='off' type='number' inputMode='numeric' max="24" min={0}></input> */}
     

//         <div className="service-modal-body">
            
//           <Form>
//             <Form.Group className="mb-3">
//               <FloatingLabel label="Open Time">

//                <TimePicker
//                   className="form-control time-picker"
//                   clockClassName="time-picker-clock"
//                   showLeadingZeros
//                   value={openTime}
//                   onChange={handleOpenTimeChange}
//                 /> 
//               </FloatingLabel>
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <FloatingLabel label="Close Time">
//                 <TimePicker
//                   className="form-control time-picker"
//                   clockClassName="time-picker-clock"
//                   showLeadingZeros
//                   value={closeTime}
//                   onChange={handleCloseTimeChange}
//                   style={{width:"100px"}}

//                 />
//               </FloatingLabel>
//             </Form.Group>
//           </Form>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button className="btn-primary" onClick={handleSubmit}>
//           Add Service
//         </Button>
//         <Button className="btn-secondary" onClick={props.onHide}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditWorkTimeModal;
