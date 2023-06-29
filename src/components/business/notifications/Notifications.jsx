import React from 'react'
import './notifications.css'
import NotificationBox from './NotificationBox';
function Notifications() {
  return (
    <div className='notifications'>
      <h1>Notifications</h1>
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
