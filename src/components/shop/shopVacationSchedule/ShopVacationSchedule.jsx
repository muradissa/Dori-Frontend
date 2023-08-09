import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {LuEdit} from 'react-icons/lu';
import {RiDeleteBinFill}  from 'react-icons/ri';
import AddOrEditVacationModal from './AddOrEditVacationModal';
import './vacation.css'
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
  const dataArray = [
    {
      employers: [{ id: 2123, name: 'John Vosrs' },{ id: 1234, name: 'Alice Smith' },{ id: 5678, name: 'Bob Johnson' },{ id: 9876, name: 'Emily Davis' },{ id: 6543, name: 'Sophia Wilson' }],
      fromDate: '30-6-2023',
      toDate: '1-7-2023',
      vacationDays: 2
    },
    {
      employers: [{ id: 1234, name: 'Alice Smith' }],
      fromDate: '15-7-2023',
      toDate: '20-7-2023',
      vacationDays: 5
    },
    {
      employers: [{ id: 5678, name: 'Bob Johnson' }],
      fromDate: '8-8-2023',
      toDate: '10-8-2023',
      vacationDays: 3
    },
    {
      employers: [{ id: 9876, name: 'Emily Davis' }],
      fromDate: '25-9-2023',
      toDate: '28-9-2023',
      vacationDays: 4
    },
    {
      employers: [{ id: 3456, name: 'Michael Brown' }],
      fromDate: '12-10-2023',
      toDate: '15-10-2023',
      vacationDays: 3
    },
    {
      employers: [{ id: 6543, name: 'Sophia Wilson' }],
      fromDate: '5-11-2023',
      toDate: '7-11-2023',
      vacationDays: 2
    },
    {
      employers: [{ id: 8901, name: 'David Lee' }],
      fromDate: '20-12-2023',
      toDate: '25-12-2023',
      vacationDays: 6
    },
    {
      employers: [{ id: 2345, name: 'Olivia Martinez' }],
      fromDate: '3-1-2024',
      toDate: '5-1-2024',
      vacationDays: 3
    },
    {
      employers: [{ id: 4567, name: 'James Taylor' }],
      fromDate: '18-2-2024',
      toDate: '20-2-2024',
      vacationDays: 3
    },
    {
      employers: [{ id: 6789, name: 'Emma Anderson' }],
      fromDate: '10-3-2024',
      toDate: '12-3-2024',
      vacationDays: 2
    }
  ];
  // { employers: [{id: 2123 , name : John Vosrs},{}] fromDate: '30-6-2023', toDate :'1-7-2023', vacationDays: 2}
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [modalShow, setModalShow] = React.useState(false);
  const [vacationItem, setVacationItem] = React.useState(null);
  const [vacationType,setVacationType] = useState(""); // "add" or "edit"

  const employessNamesFunc = (employess) =>{
    if(employess.length === 0) 
      return "";

    let strEmployessName ='';
    employess.forEach(employer => {
      strEmployessName = strEmployessName+ employer.name+" , ";
    });
    return strEmployessName.substring(0, strEmployessName.length - 2)
    
  }

  const funcAddEditVacation = (vacationType1,vacation) =>{
    setModalShow(true)
    setVacationType(vacationType1);
    setVacationItem(vacation)
  }


  return (
    <div className='shop-vacation-schedule'>
      
    
      <div className="table-container">

        <div className="table">
          <h2>Vacation Schedule</h2>
          <div className="shop-vacation-schedule-controls">
            <DropdownButton id="dropdown-vacation-button1" title={months[selectedMonth]} value={selectedMonth}>
              {months.map((month, index) => (
                  <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedMonth(index)}>{month}</Dropdown.Item>
              ))}
            </DropdownButton>
            <DropdownButton id="dropdown-vacation-button2" title={selectedYear} value={selectedYear}>
                    <Dropdown.Item key={2023} value={2023} onClick={(e)=>setSelectedYear(2023)}>{2023}</Dropdown.Item>
                    <Dropdown.Item key={2024} value={2024} onClick={(e)=>setSelectedYear(2024)}>{2024}</Dropdown.Item>
                    <Dropdown.Item key={2025} value={2025} onClick={(e)=>setSelectedYear(2025)}>{2025}</Dropdown.Item>
            </DropdownButton>
            <button  className='btn-primary' style={{marginLeft:"auto"}} onClick={()=> funcAddEditVacation("Add",null)}>
                New Vacation +
            </button>
          </div>
          <div></div>
          {/* <table>
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
                  <td><LuEdit style={{color:"green"}}/></td>
                  <td ><RiDeleteBinFill style={{color:"red" ,width:""}}/></td>

                </tr>
              ))}
            </tbody>
          </table> */}
           <table className='vacation-table'>
            <thead>
              <tr>
                <th >employers</th>
                <th>Days</th>
                <th>From </th>
                <th>to</th>
                <th className='width-100-px '>Edit</th>
                <th className='width-100-px '>Delete</th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((vacation,index) => (
                <tr key={index}>
                  <td> {employessNamesFunc(vacation.employers)} </td>
                  <td> {vacation.vacationDays} </td>
                  <td> {vacation.fromDate} </td>
                  <td> {vacation.toDate} </td>
                  <td onClick={()=> funcAddEditVacation("Edit",vacation)}> <LuEdit style={{color:"green"}}/> </td>
                  <td> <RiDeleteBinFill style={{color:"red" ,width:""}}/> </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h6>note : if you have specific day you want to change it , you can use the vactions to change work days and hour</h6>
      </div> 
      { modalShow &&
        <AddOrEditVacationModal   show={modalShow} onHide={() => setModalShow(false)} vacationType={vacationType} vacationItem={vacationItem}/>
      
      }
    </div>
  )
}

export default ShopVacationSchedule