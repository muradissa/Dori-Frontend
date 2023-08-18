import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import './shopSettings.css'
import PrimaryTitle from '../../global/PrimaryTitle';
function ShopSettings() {
    const [theme, setTheme] = useState('light');

    const months = ['1 month', '2 month', '3 month', '4 month', '5 month', '6 month'];
    const [selectedMonth, setSelectedMonth] = useState('1 month');

    const freeTimeAppi = ['minimum service time', '15min', '20 min', '30 min', '45 min', '1:00 h','1:30 h',];
    const [selectedFreeTime, setSelectedFreeTime] = useState('minimum service time');

    // Event handler for selecting theme
    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className='business-settings'>
            {/* <h2 >Settings</h2> */}
            <PrimaryTitle title={"Settings"}/>

            <div className='business-settings-switches'>
                <Form>     
                    <Form.Check
                        type="switch"
                        id="settings-switch-1"
                        label="Allow multi booking requests even when his appointment date did not pass"
                    />
                    <br/>
                    <Form.Check       
                        type="switch"
                        label="Send reminder Email to customer before 1 hour of booking"
                        id="settings-switch-2"
                    />
                </Form>
             </div>

             <br/>

            <div className='notifications-orderrrr'>
                <h6>Allow to customers booking maxmimum before :</h6>
                <DropdownButton id="dropdown-vacation-button1" title={months[selectedMonth]} value={selectedMonth}>
                {months.map((month, index) => (
                    <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedMonth(index)}>{month}</Dropdown.Item>
                ))}
                </DropdownButton>
            </div>

            <hr></hr>

            {/* employess */}
            <Form>
                <h6>How can accept bookings :</h6>
                <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                        inline
                        label="All Employess"
                        name="group101"
                        type="radio"
                        id={`inline-radio-33`}
                    />
                    <Form.Check
                        inline
                        label="Owenr"
                        name="group101"
                        type="radio"
                        id={`inline-radio-22`}
                    />
                    <Form.Check
                        inline
                        label="Automatically"
                        name="group101"
                        type="radio"
                        id={`inline-radio-11`}
                    />
                </div>

                <br/>    

                <h6>how can cancel bookings :</h6>
                <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                        inline
                        name="group102"
                        label="All Employess"
                        type="radio"
                        id={`inline-radio-3322`}
                    />
                    <Form.Check
                        inline
                        label="Owenr"
                        name="group102"
                        type="radio"
                        id={`inline-radio-2222`}
                    />
                </div>
            </Form>
          
            <hr></hr>

            {/* shop */}
            <div className=''>
                <h6>choose time between free appointment can be :</h6>
                <DropdownButton id="dropdown-vacation-button1" title={freeTimeAppi[selectedFreeTime]} value={selectedFreeTime}>
                {freeTimeAppi.map((item, index) => (
                    <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedFreeTime(index)}>{item}</Dropdown.Item>
                ))}
                </DropdownButton>
            </div>
       
            <br></br>
            <br></br>

            <Button variant="primary" type="submit" style={{display:"flex",margin:"auto"}}>
                SAVE CHANGES
            </Button>

        </div>
    )
}

export default ShopSettings