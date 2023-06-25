import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {LuEdit} from 'react-icons/lu';
import {RiDeleteBinFill}  from 'react-icons/ri';
function ShopVacationSchedule() {

  const shopVacations = [
    { date: '30-6-2023', from: '12:00', to: '16:00' },
    { date: '15-8-2023', from: '9:00', to: '13:00' },
    { date: '25-12-2023', from: 'Closed', to: 'Closed' },
    { date: '1-1-2024', from: 'Closed', to: 'Closed' },
    { date: '10-4-2024', from: '10:00', to: '14:00' },
    { date: '1-5-2024', from: 'Closed', to: 'Closed' },
    { date: '9-6-2024', from: '9:00', to: '13:00' },
    { date: '24-12-2024', from: 'Closed', to: 'Closed' },
    { date: '25-12-2024', from: 'Closed', to: 'Closed' },
    { date: '1-1-2025', from: 'Closed', to: 'Closed' },
    { date: '3-3-2025', from: '14:00', to: '18:00' },
    { date: '10-4-2025', from: '10:00', to: '14:00' },
    { date: '1-5-2025', from: 'Closed', to: 'Closed' },
    { date: '30-6-2025', from: '12:00', to: '16:00' },
    { date: '9-6-2025', from: '9:00', to: '13:00' },
    { date: '25-12-2025', from: 'Closed', to: 'Closed' },
  ];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  return (
    <div className='shop-vacation-schedule'>
      <div className="controls">
          <DropdownButton id="dropdown-basic-button2" title={months[selectedMonth]} value={selectedMonth}>
            {months.map((month, index) => (
                <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedMonth(index)}>{month}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button3" title={selectedYear} value={selectedYear}>
                  <Dropdown.Item key={2023} value={2023} onClick={(e)=>setSelectedYear(2023)}>{2023}</Dropdown.Item>
                  <Dropdown.Item key={2024} value={2024} onClick={(e)=>setSelectedYear(2024)}>{2024}</Dropdown.Item>
                  <Dropdown.Item key={2025} value={2025} onClick={(e)=>setSelectedYear(2025)}>{2025}</Dropdown.Item>
          </DropdownButton>
      </div>
    
      <div className="table-container">

        <div className="table">
          <h2>Vacation Schedule</h2>
          <div></div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>From </th>
                <th>to</th>
                <th className='width-100-px '>Edit</th>
                <th className='width-100-px '>Delete</th>
              </tr>
            </thead>
            <tbody>
              {shopVacations.map((vacation,index) => (
                <tr key={index}>
                  <td>{vacation.date}</td>
                  <td>{vacation.from}</td>
                  <td>{vacation.to}</td>
                  {/* <td>{hours.breaks.length > 0 ? hours.breaks.join(' - ') : 'None'}</td> */}
                  <td><LuEdit style={{color:"green"}}/></td>
                  <td ><RiDeleteBinFill style={{color:"red" ,width:""}}/></td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h6>note : if you have specific day you want to change it , you can use the vactions to change work days and hour</h6>
      </div> 
    </div>
  )
}

export default ShopVacationSchedule