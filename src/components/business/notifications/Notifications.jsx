import React ,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

import './notifications.css'

import NotificationBox from './NotificationBox';
function Notifications() {
  const months = [
    'Waiting First', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className='notifications'>
      <h2>Notifications</h2>
          <div className='notifications-order-filter'>
              {/** Order */}
              <div className='notifications-order'>
                  <h6>Order :</h6>
                  <DropdownButton id="dropdown-vacation-button1" title={months[selectedMonth]} value={selectedMonth}>
                    {months.map((month, index) => (
                        <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedMonth(index)}>{month}</Dropdown.Item>
                    ))}
                  </DropdownButton>
              </div>

              {/** Filter */}
              <Form className="notifications-filter">
                <h6>Filter : </h6>
                  <div key={`inline-checkbox}`} >
                    <Form.Check
                      inline
                      label="Accepted"
                      name="group1"
                      type="checkbox"
                      id={`inline-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label="Waiting"
                      name="group1"
                      type="checkbox"
                      id={`inline-checkbox-2`}
                    />
                    <Form.Check
                      inline
                      label="Canceled"
                      type="checkbox"
                      id={`inline-checkbox-3`}
                    />
                  </div> 
              </Form>
          </div>
          <NotificationBox></NotificationBox>
    </div>
  )
}

export default Notifications;

// New Or Not
// Client -> Service -> Date Time  
// Name: ASDASd - Phone Number:123123123
// Service: Haircut , Tinme : 45min
// Date: 2015-2/31 Time : 1231231231
// Employee Name : asdasdas Status: Approved
