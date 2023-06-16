import React from 'react'
import {LuEdit} from 'react-icons/lu'
function ShopWorkSchedule() {
  const shopHours = [
    { day: 'Sunday', open: 'Closed', close: 'Closed', breaks: [] },
    { day: 'Monday', open: '9:00 ', close: '18:00', breaks: [] },
    { day: 'Tuesday', open: '9:00 ', close: '18:00', breaks: ['12:00', '13:00'] },
    { day: 'Wednesday', open: '9:00 ', close: '18:00', breaks: [] },
    { day: 'Thursday', open: '9:00 ', close: '18:00', breaks: [] },
    { day: 'Friday', open: '9:00 ', close: '18:00', breaks: ['12:00 ', '13:00 '] },
    { day: 'Saturday', open: '10:00 ', close: '16:00', breaks: [] },
    
  ];

  return (
      <div className="table-container">

        <div className="table">
          <h2>Shop Hours</h2>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Open</th>
                <th>Close</th>
                <th>Breaks</th>
                <th className='width-100-px '>Edit</th>
              </tr>
            </thead>
            <tbody>
              {shopHours.map((hours) => (
                <tr key={hours.day}>
                  <td>{hours.day}</td>
                  <td>{hours.open}</td>
                  <td>{hours.close}</td>
                  <td>{hours.breaks.length > 0 ? hours.breaks.join(' - ') : 'None'}</td>
                  <td><LuEdit style={{color:"green"}}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h6>note : if you have specific day you want to change it , you can use the vactions to change work days and hour</h6>
    </div>

  );
};
export default ShopWorkSchedule