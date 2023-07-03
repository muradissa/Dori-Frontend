import React ,{useEffect,useState} from 'react'
import {BsFillXCircleFill ,BsCheckCircleFill, BsQuestionCircleFill, BsInfoCircleFill} from 'react-icons/bs';
import {AiFillWarning  } from 'react-icons/ai';

function NotificationBox() {
    const [waitingNotifications,setWaitingNotifications] = useState([]);
    const [confirmedNotifications,setConfirmedNotifications] = useState([]);
    const [canceledNotifications,setCanceledNotifications] = useState([]);


    const notificationsData =[
        {
          "id": 1,
          "businessId": "B123",
          "name": "John Doe",
          "phone": "123-456-7890",
          "serverType": "Waiter",
          "employerId": "E456",
          "employerName": "Restaurant A",
          "bookingTime": "18:00",
          "bookingDate": "2023-07-05",
          "notificationTime": "16:00",
          "notificationDate": "2023-07-04",
          "status": "confirmed",
          "description": "Accepted by John Doewwrsaf"
        },
        {
          "id": 2,
          "businessId": "B456",
          "name": "Jane Smith",
          "phone": "987-654-3210",
          "serverType": "Bartender",
          "employerId": "E789",
          "employerName": "Bar B",
          "bookingTime": "20:30",
          "bookingDate": "2023-07-07",
          "notificationTime": "18:30",
          "notificationDate": "2023-07-06",
          "status": "waiting",
          "description": "Prepare cocktails for a private event"
        },
        {
          "id": 3,
          "businessId": "B789",
          "name": "David Johnson",
          "phone": "555-123-4567",
          "serverType": "Host",
          "employerId": "E234",
          "employerName": "Restaurant C",
          "bookingTime": "19:15",
          "bookingDate": "2023-07-10",
          "notificationTime": "17:15",
          "notificationDate": "2023-07-09",
          "status": "confirmed",
          "description": "Greet and seat guests for dinner"
        },
        {
          "id": 4,
          "businessId": "B234",
          "name": "Emily Brown",
          "phone": "777-999-8888",
          "serverType": "Catering Staff",
          "employerId": "E567",
          "employerName": "Catering Company X",
          "bookingTime": "13:00",
          "bookingDate": "2023-07-12",
          "notificationTime": "11:00",
          "notificationDate": "2023-07-11",
          "status": "confirmed",
          "description": "Assist with food preparation and service"
        },
        {
          "id": 5,
          "businessId": "B567",
          "name": "Michael Davis",
          "phone": "222-333-4444",
          "serverType": "Waiter",
          "employerId": "E123",
          "employerName": "Restaurant Y",
          "bookingTime": "17:30",
          "bookingDate": "2023-07-15",
          "notificationTime": "15:30",
          "notificationDate": "2023-07-14",
          "status": "canceled",
          "description": "Serve tables during dinner rush"
        },
        {
          "id": 6,
          "businessId": "B890",
          "name": "Olivia Wilson",
          "phone": "444-555-6666",
          "serverType": "Bartender",
          "employerId": "E890",
          "employerName": "Bar Z",
          "bookingTime": "21:00",
          "bookingDate": "2023-07-17",
          "notificationTime": "19:00",
          "notificationDate": "2023-07-16",
          "status": "confirmed",
          "description": "Mix and serve drinks at the bar"
        },
        {
          "id": 7,
          "businessId": "B901",
          "name": "Sophia Anderson",
          "phone": "888-777-6666",
          "serverType": "Host",
          "employerId": "E901",
          "employerName": "Restaurant A",
          "bookingTime": "18:45",
          "bookingDate": "2023-07-20",
          "notificationTime": "16:45",
          "notificationDate": "2023-07-19",
          "status": "waiting",
          "description": "Manage seating arrangements and waitlist"
        },
        {
          "id": 8,
          "businessId": "B678",
          "name": "James Lee",
          "phone": "111-222-3333",
          "serverType": "Catering Staff",
          "employerId": "E345",
          "employerName": "Catering Company Y",
          "bookingTime": "14:30",
          "bookingDate": "2023-07-22",
          "notificationTime": "12:30",
          "notificationDate": "2023-07-21",
          "status": "confirmed",
          "description": "Set up buffet and assist with food service"
        },
        {
          "id": 9,
          "businessId": "B456",
          "name": "Emma Taylor",
          "phone": "999-888-7777",
          "serverType": "Waiter",
          "employerId": "E123",
          "employerName": "Restaurant B",
          "bookingTime": "19:30",
          "bookingDate": "2023-07-25",
          "notificationTime": "17:30",
          "notificationDate": "2023-07-24",
          "status": "confirmed",
          "description": "Take orders and serve customers"
        },
        {
          "id": 10,
          "businessId": "B789",
          "name": "Daniel Martin",
          "phone": "666-555-4444",
          "serverType": "Bartender",
          "employerId": "E567",
          "employerName": "Bar C",
          "bookingTime": "20:00",
          "bookingDate": "2023-07-28",
          "notificationTime": "18:00",
          "notificationDate": "2023-07-27",
          "status": "waiting",
          "description": "Create specialty cocktails for a special event"
        }
      ]
      
    const filterNotifications = () =>{
        setWaitingNotifications(notificationsData.filter(notification => notification.status==='waiting'));
        setConfirmedNotifications(notificationsData.filter(notification => notification.status==='confirmed'));
        setCanceledNotifications(notificationsData.filter(notification => notification.status==='canceled'));
        
    }
    useEffect(() => {
        filterNotifications();
    },[]);
    
    const checkNotificationStatus =(type) =>{
        if(type === 'confirmed'){
            return 'success';
        }else if(type === 'canceled'){
            return 'danger';
        }else{
            //waiting
            return 'info';
        }
    }

    const orderNotificationsByDateTime = (data ,shouldReverse) => {
        // Create a copy of the original array to avoid modifying it directly
        var sortedData = [...data];
      
        sortedData.sort((a, b) => {
          // Compare notificationDate
          const notificationDateA = new Date(a.notificationDate);
          const notificationDateB = new Date(b.notificationDate);
      
          if (notificationDateA < notificationDateB) {
            return -1;
          } else if (notificationDateA > notificationDateB) {
            return 1;
          }
      
          // If notificationDate is the same, compare notificationTime
          const notificationTimeA = a.notificationTime;
          const notificationTimeB = b.notificationTime;
      
          if (notificationTimeA < notificationTimeB) {
            return -1;
          } else if (notificationTimeA > notificationTimeB) {
            return 1;
          }
      
          return 0;
        });

        if (shouldReverse){
            sortedData = sortedData.reverse();
        }
      
        return sortedData;
      };
      
    //   const sortedNotificationsData = orderNotificationsByDateTime(notificationsData);
      
  return (
    <div className="container-fluid text-center">
        {/* { waitingNotifications.length !== 0 && waitingNotifications.map(notification =>(
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                    <div className="new-message-box">
                        <div className="new-message-box-info">
                            <div className="info-tab tip-icon-info" title="error">
                                <BsInfoCircleFill className='message-box-tip-icon'/>
                                <i></i>
                            </div>
                            <div className="tip-box-info">
                                <div className="tip-message-box row">
                                    <p className='col-xs-12 col-sm-6 col-md-3'>{notification.name} - {notification.phone}</p>
                                    <p className='col-xs-12 col-sm-6 col-md-3'>{notification.serverType} - {notification.employerName} </p>
                                    <p className='col-xs-12 col-sm-6 col-md-3'>{notification.bookingTime} {notification.bookingDate}</p>
                                    <div className='col-xs-12 col-sm-6 col-md-3 message-box-tip-buttons'>
                                        <button> <BsCheckCircleFill style={{color:"green",scale:"1.5"}}/></button> 
                                        <button> <BsFillXCircleFill style={{color:"red" ,scale:"1.5"}}/></button> 
                                    </div>
                                </div>
                                <span className='tip-message-box-date'>{notification.notificationTime} , {notification.notificationDate}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        ))} */}

        { notificationsData.length !== 0 && notificationsData.map(notification =>(
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-sm-offset-3">
                    <div className="new-message-box">
                        <div className={`new-message-box-${checkNotificationStatus(notification.status)}`}>
                            {
                                notification.status === "waiting" && 
                                <div className="info-tab tip-icon-info" title="error">
                                    <BsInfoCircleFill className='message-box-tip-icon'/>
                                    <i></i>
                                </div>
                            }
                            {
                                notification.status === "confirmed" && 
                                <div className="info-tab tip-icon-success" title="success">
                                    <BsCheckCircleFill className='message-box-tip-icon'/>
                                    <i></i>
                                </div>
                            }
                            {
                                notification.status === "canceled" && 
                                <div className="info-tab tip-icon-danger" title="error">
                                    <BsFillXCircleFill className='message-box-tip-icon'/>
                                    <i></i>
                                </div>
                            }

                            <div className={`tip-box-${checkNotificationStatus(notification.status)}`}>
                                <div className="tip-message-box row">
                                    <p className='col-xs-12 col-sm-6 col-md-3'>{notification.name} , {notification.phone}</p>
                                    <p className='col-xs-12 col-sm-6 col-md-3'>{notification.serverType} , {notification.employerName} </p>
                                    <p className='col-xs-12 col-sm-6 col-md-3'>{notification.bookingTime} , {notification.bookingDate}</p>
                                    {
                                        notification.status === "waiting" &&
                                        <div className='col-xs-12 col-sm-6 col-md-3 message-box-tip-buttons'>
                                            <button> <BsCheckCircleFill style={{color:"green",scale:"1.5"}}/></button> 
                                            <button> <BsFillXCircleFill style={{color:"red" ,scale:"1.5"}}/></button> 
                                        </div>
                                    }
                                    {
                                        notification.status !== "waiting" &&
                                            <p className='col-xs-12 col-sm-6 col-md-3'>{notification.description}</p>
                                    }
                                </div>
                                <span className='tip-message-box-date'>{notification.notificationTime} , {notification.notificationDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        ))}

        
        {/* <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-danger">
                        <div className="info-tab tip-icon-danger" title="error">
                            <BsFillXCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-danger">
                             <div className="tip-message-box row">
                                <p className='col-xs-12 col-sm-6 col-md-3'>John Sawea  050-3278422</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Haircut , Ahmasd Tofee</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>12:30 - 12/6/2023</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Canceled by Bill Smith</p>
                            </div>
                            <span className='tip-message-box-date'>12:30 - 12/6/2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-success">
                        <div className="info-tab tip-icon-success" title="success">
                            <BsCheckCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-success">
                             <div className="tip-message-box row">
                                <p className='col-xs-12 col-sm-6 col-md-3'>John Sawea  050-3278422</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Haircut 20min Ahmasd Tofee</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>12:30 - 12/6/2023</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Accepted by Bill Smith</p>
                            </div>
                            <span className='tip-message-box-date'>12:30 - 12/6/2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
        {/* <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-info">
                        <div className="info-tab tip-icon-info" title="error">
                            <BsInfoCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-info">
                             <div className="tip-message-box row">
                                <p className='col-xs-12 col-sm-6 col-md-3'>John Sawea  050-3278422</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Haircut 20min Ahmasd Tofee</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>12:30 - 12/6/2023</p>
                                <div className='col-xs-12 col-sm-6 col-md-3 message-box-tip-buttons'>
                                    <button> <BsCheckCircleFill style={{color:"green",scale:"1.5"}}/></button> 
                                    <button> <BsFillXCircleFill style={{color:"red" ,scale:"1.5"}}/></button> 
                                </div>
                            </div>
                            <span className='tip-message-box-date'>12:30 - 12/6/2023</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>      */}





        {/* <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-warning">
                        <div className="info-tab tip-icon-warning" title="error">
                            <AiFillWarning className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-warning">

                             <div className="tip-message-box row">
                                <p className='col-xs-12 col-sm-6 col-md-3'>John Sawea  050-3278422</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Haircut 20min Ahmasd Tofee</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>12:30 - 12/6/2023</p>
                                <div className='col-xs-12 col-sm-6 col-md-3 message-box-tip-buttons'>
                                    <button><BsCheckCircleFill style={{color:"green",scale:"1.5"}}/></button> 
                                    <button><BsFillXCircleFill style={{color:"red" ,scale:"1.5"}}/></button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */} 
        {/* <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-alert">
                        <div className="info-tab tip-icon-alert" title="error">
                            <BsQuestionCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-alert">
                            <div className="tip-message-box row">
                                <p className='col-xs-12 col-sm-6 col-md-3'>John Sawea  050-3278422</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Haircut 20min Ahmasd Tofee</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>12:30 - 12/6/2023</p>
                                <div className='col-xs-12 col-sm-6 col-md-3 message-box-tip-buttons'>
                                    <button><BsCheckCircleFill style={{color:"green",scale:"1.5"}}/></button> 
                                    <button><BsFillXCircleFill style={{color:"red" ,scale:"1.5"}}/></button> 

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default NotificationBox