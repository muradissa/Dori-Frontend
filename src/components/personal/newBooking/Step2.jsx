

import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './step2.css';

const Step2 = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDayOfWeek = (year, month, day) => {
    return new Date(year, month, day).getDay();
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    console.log(day);
  };

  const renderTable = () => {
    const totalDays = getDaysInMonth(selectedYear, selectedMonth);
    const firstDayOfWeek = getDayOfWeek(selectedYear, selectedMonth, 1);

    const table = [];
    let currentDay = 1;

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfWeek) {
          row.push(<td key={`${i}-${j}`} className="empty-cell"></td>);
        } else if (currentDay <= totalDays) {
            const currentDay2 = currentDay;
          const isCurrentDaySelected = currentDay === selectedDay;
          row.push(
            <td
              key={`${i}-${j}`}
              className={`date-cell ${isCurrentDaySelected ? ' date-cell-selected' : ''}`}
              onClick={() => handleDayClick(currentDay2)}
            >
              {currentDay}
            </td>
          );
          currentDay++;
        } else {
            // if(i == 5  && (currentDay > totalDays) ){

            // }else{
            //     row.push(<td key={`${i}-${j}`} className="empty-cell"></td>);
            // }
            row.push(<td key={`${i}-${j}`} className="empty-cell"></td>);

          
        }
      }
      table.push(<tr key={i}>{row}</tr>);
    }

    return table;
  };

  return (
    <div className="datepicker-container">
        <div className='step2-left'>
            <div className="controls">
                {/* <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                {months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                ))}
                </select> */}
                <DropdownButton id="dropdown-basic-button2" title={months[selectedMonth]} value={selectedMonth}>
                    {months.map((month, index) => (
                        <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedMonth(index)}>{month}</Dropdown.Item>
                    ))}
                    {/*  */}
                </DropdownButton>
                {/* <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
            
                    <option key={2023} value={2023}>{2023}</option>
                    <option key={2024} value={2024}>{2024}</option>

                </select> */}

                <DropdownButton id="dropdown-basic-button3" title={selectedYear} value={selectedYear}>
                    {/* {months.map((month, index) => ( */}
                        <Dropdown.Item key={2023} value={2023} onClick={(e)=>setSelectedYear(2023)}>{2023}</Dropdown.Item>
                        <Dropdown.Item key={2024} value={2024} onClick={(e)=>setSelectedYear(2024)}>{2024}</Dropdown.Item>
                        <Dropdown.Item key={2025} value={2025} onClick={(e)=>setSelectedYear(2025)}>{2025}</Dropdown.Item>


                    {/* ))} */}
                    {/*  */}
                </DropdownButton>
            </div>
            <table className="datepicker-table">
                <thead>
                <tr>
                    {daysOfWeek.map((day) => (
                    <th key={day}>{day}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div> 
        <div className='step2-right'>
            <div className="list-of-hours">
                {hours.map(hour => 
                    <div key={hour}
                        className={"item-hour "+ `${hour === "" ? " selected-hour":""}` }
                        // onClick={()=> setChosenEmployer(hour)}
                    >
                        <span >{hour}</span>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Step2;
