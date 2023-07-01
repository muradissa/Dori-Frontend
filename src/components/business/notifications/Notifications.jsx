import React ,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './notifications.css'

import NotificationBox from './NotificationBox';
function Notifications() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className='notifications'>
      <h1>Notifications</h1>
          <div className='notifications-radio-status'>
              {/** Show */}
              <div>
                  <h6>Order by</h6>
                  <DropdownButton id="dropdown-vacation-button1" title={months[selectedMonth]} value={selectedMonth}>
                    {months.map((month, index) => (
                        <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedMonth(index)}>{month}</Dropdown.Item>
                    ))}
                  </DropdownButton>
              </div>
              {/** Order */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="allCheckbox" checked={isChecked} onChange={handleCheckboxChange}/>
                <label className="form-check-label" htmlFor="allCheckbox">
                  All
                </label>
                <br />
                <input className="form-check-input" type="checkbox" id="acceptedCheckbox" checked={isChecked} onChange={handleCheckboxChange}/>
                <label className="form-check-label" htmlFor="acceptedCheckbox">
                  Accepted
                </label>
                <br />
                <input
                  className="form-check-input" type="checkbox" id="confirmedCheckbox" checked={isChecked} onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="confirmedCheckbox">
                  Confirmed
                </label>
                <br />
                <input className="form-check-input" type="checkbox"  id="canceledCheckbox"  checked={isChecked}  onChange={handleCheckboxChange}/>
                <label className="form-check-label" htmlFor="canceledCheckbox">
                  Canceled
                </label>
              </div>

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
