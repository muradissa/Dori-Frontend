import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {AiFillWarning} from 'react-icons/ai'; 
import {FcCheckmark,FcCancel,FcApproval} from 'react-icons/fc'; 

import './shophome.css';
import ChartBarMonth from './ChartBarMonth';
function ShopHome() {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

  return (
    <div className='shop-home'>
        <div className='shop-home-row1'>
            <h3>
                Summary of appointments for today
            </h3>
            <div className='shop-home-blocks'>
                <div className='shop-home-block'>
                    <h5>All</h5>
                    <h5>20</h5>
                </div>
                <div className='shop-home-block'>
                    <h5><FcApproval style={{scale:"1.2"}}/> Accepted </h5>
                    <h5>14</h5>
                </div>
                <div className='shop-home-block'>
                    <h5><AiFillWarning style={{color:"orange",scale:"1.2"}}/> Waiting</h5>
                    <h5>4</h5>
                </div>
                <div className='shop-home-block'>
                    <h5><FcCancel  style={{scale:"1.2"}}/> Canceled</h5>
                    <h5>2</h5>
                </div>
            </div>    
        </div>
        <hr></hr>
        <div className="shop-home-row2-controls">
            <DropdownButton id="dropdown-basic-button22" title={months[selectedMonth]} value={selectedMonth}>
                {months.map((month, index) => (
                    <Dropdown.Item key={index} value={index} onClick={(e)=>setSelectedMonth(index)}>{month}</Dropdown.Item>
                ))}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button33" title={selectedYear} value={selectedYear}>
                    <Dropdown.Item key={2023} value={2023} onClick={(e)=>setSelectedYear(2023)}>{2023}</Dropdown.Item>
                    <Dropdown.Item key={2024} value={2024} onClick={(e)=>setSelectedYear(2024)}>{2024}</Dropdown.Item>
                    <Dropdown.Item key={2025} value={2025} onClick={(e)=>setSelectedYear(2025)}>{2025}</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className='shop-home-row2'>
            
            <ChartBarMonth/>
        </div>

    </div>
  )
}

export default ShopHome