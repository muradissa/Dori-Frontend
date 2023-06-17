import React ,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default CSS styles

import {AiOutlineEdit,AiFillWarning} from 'react-icons/ai'; 
import {FcCheckmark} from 'react-icons/fc'; 



import './bookings.css'
function Bookings() {
  const allBookings = [
    { id: 1, name: 'John Doe', phone: '052-345-1234', service: 'Haircut', time: '10:00 AM', date: 'June 12', status: 'Approved' },
    { id: 2, name: 'Jane Smith', phone: '052-645-1224', service: 'Manicure', time: '2:30 PM', date: 'June 12', status: 'Approved' },
    { id: 3, name: 'Michael Brown', phone: '052-545-1234', service: 'Massage', time: '11:30 AM', date: 'June 13', status: 'Waiting' },
    { id: 4, name: 'Emily Johnson', phone: '050-349-1234', service: 'Facial', time: '3:00 PM', date: 'June 13', status: 'Waiting' },
    { id: 5, name: 'David Wilson', phone: '052-789-1234', service: 'Pedicure', time: '9:00 AM', date: 'June 14', status: 'Approved' },
    { id: 6, name: 'Sarah Davis', phone: '052-456-1234', service: 'Haircut', time: '1:30 PM', date: 'June 14', status: 'Waiting' },
    { id: 7, name: 'Daniel Taylor', phone: '052-987-1234', service: 'Massage', time: '10:30 AM', date: 'June 15', status: 'Approved' },
    { id: 8, name: 'Olivia Wilson', phone: '052-654-1234', service: 'Manicure', time: '4:00 PM', date: 'June 15', status: 'Waiting' },
    { id: 9, name: 'Jacob Anderson', phone: '052-123-1234', service: 'Facial', time: '2:00 PM', date: 'June 16', status: 'Approved' },
    { id: 10, name: 'Emma Martinez', phone: '052-765-1234', service: 'Pedicure', time: '11:00 AM', date: 'June 16', status: 'Waiting' },
    { id: 11, name: 'William Thompson', phone: '052-789-1234', service: 'Haircut', time: '3:30 PM', date: 'June 17', status: 'Waiting' },
    { id: 12, name: 'Ava Rodriguez', phone: '052-345-1234', service: 'Manicure', time: '9:30 AM', date: 'June 17', status: 'Approved' },
    { id: 13, name: 'James Brown', phone: '052-645-1234', service: 'Massage', time: '12:30 PM', date: 'June 18', status: 'Approved' },
    { id: 14, name: 'Sophia Davis', phone: '052-545-1234', service: 'Facial', time: '5:00 PM', date: 'June 18', status: 'Waiting' },
    { id: 15, name: 'Benjamin Wilson', phone: '050-349-1234', service: 'Pedicure', time: '11:30 AM', date: 'June 19', status: 'Approved' },
    { id: 16, name: 'Mia Johnson', phone: '052-789-1234', service: 'Haircut', time: '4:30 PM', date: 'June 19', status: 'Waiting' },
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDropDownDate, setSelectedDropDownDate] = useState("Today");


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className='table-container'>

      <div className='bookings-choosing-date'>
        <DropdownButton id="dropdown-basic-button" title={selectedDropDownDate}>
          <Dropdown.Item onClick={()=>setSelectedDropDownDate('Today')}>Today</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSelectedDropDownDate('Tommorow')}>Tommorow</Dropdown.Item>
          <Dropdown.Item onClick={()=>setSelectedDropDownDate('Choose Date')}>Choose Date</Dropdown.Item>
        </DropdownButton>

        { selectedDropDownDate === 'Choose Date'&&
          <div className="datepicker-choosing-date ">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className="datepicker-input"
            />
          </div>
        }
        

      </div>
      <div className="table">
        <h2>Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>

              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Time</th>
              {/* <th>Date</th> */}
              <th>Status</th>
              
              <th>Edit</th>
            </tr>
          </thead>
          <tbody >
            {allBookings.map((booking,index) => (
              <tr key={booking.id}>
                <td>{index+1}</td>

                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{booking.service}</td>
                <td>{booking.time}</td>
                {/* <td>{booking.date}</td> */}
                {
                  // booking.status === 'Approved' && <td style={{background:"green"}}>{booking.status}</td>
                  booking.status === 'Approved' && <td ><FcCheckmark style={{scale:"1.5"}}/></td>

                }
                {
                  // booking.status === 'Waiting' && <td style={{background:"yellow"}}>{booking.status}</td>
                  booking.status === 'Waiting' && <td ><AiFillWarning style={{color:"orange",scale:"1.5"}}/></td>

                }

                <td><button>Edit <AiOutlineEdit/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings;