
import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai'
import './myBookings.css';

const MyBookings = () => {
  const todayBookings = [
    { id: 1, name: 'Shop A', provider: 'John Doe', service: 'Haircut', time: '10:00 AM' },
    { id: 2, name: 'Shop B', provider: 'Jane Smith', service: 'Manicure', time: '2:30 PM' },
    // Add more bookings for today...
  ];

  const tomorrowBookings = [
    { id: 1, name: 'Shop C', provider: 'Michael Brown', service: 'Massage', time: '11:30 AM' },
    { id: 2, name: 'Shop D', provider: 'Emily Johnson', service: 'Facial', time: '3:00 PM' },
    // Add more bookings for tomorrow...
  ];

  const allBookings = [
    { id: 1, name: 'Shop A', provider: 'John Doe', service: 'Haircut', time: '10:00 AM', date: 'June 12' },
    { id: 2, name: 'Shop B', provider: 'Jane Smith', service: 'Manicure', time: '2:30 PM', date: 'June 12' },
    { id: 3, name: 'Shop C', provider: 'Michael Brown', service: 'Massage', time: '11:30 AM', date: 'June 13' },
    { id: 4, name: 'Shop D', provider: 'Emily Johnson', service: 'Facial', time: '3:00 PM', date: 'June 13' },
    // Add more bookings...
  ];

  const todayDate = new Date().toDateString();
  // const todayMonth = new Date().toDateString();
  // const todayYear = new Date().toDateString();

  return (
    <div className="bookings-container">
      <h1>My Bookings</h1>
      <div className="tables-container">
        <div className="table table-type-1">
          <h2 style={{marginBottom:"0px"}}>Today's Bookings</h2>
          <h6 style={{marginBottom:"20px"}}>{todayDate}</h6>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Time</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody className='tbody-today-tomorrow'>
              
              {todayBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.provider}</td>
                  <td>{booking.service}</td>
                  <td>{booking.time}</td>
                  <td><button>Edit <AiOutlineEdit/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <br/>
          <hr/>
          <br/>


          <h2>Tomorrow's Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Time</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {tomorrowBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.provider}</td>
                  <td>{booking.service}</td>
                  <td>{booking.time}</td>
                  <td><button>Edit <AiOutlineEdit/></button></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>


        <div className="table">
          <h2>All Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Time</th>
                <th>Date</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody >
              {allBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.provider}</td>
                  <td>{booking.service}</td>
                  <td>{booking.time}</td>
                  <td>{booking.date}</td>
                  <td><button>Edit <AiOutlineEdit/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
