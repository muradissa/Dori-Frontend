import React ,{useState} from 'react';
import {LuEdit} from 'react-icons/lu';
import EditWorkTimeModal from './EditWorkTimeModal';
import './shopWorkSchedule.css';
function ShopWorkSchedule() {
  const shopHours = [
    { day: 'Sunday', open: 'Closed', close: 'Closed', breakFrom: 'Closed' ,breakTo:"Closed" },
    { day: 'Monday', open: '9:00 ', close: '18:00', breakFrom: "" ,breakTo:""},
    { day: 'Tuesday', open: '9:00 ', close: '18:00', breakFrom:'12:00' ,breakTo:"13:00" },
    { day: 'Wednesday', open: '9:00 ', close: '18:00', breakFrom: '',breakTo:"" },
    { day: 'Thursday', open: '9:00 ', close: '18:00', breakFrom: '' ,breakTo:""},
    { day: 'Friday', open: '9:00 ', close: '18:00', breakFrom: '12:00 ',breakTo:"13:00"},
    { day: 'Saturday', open: '10:00 ', close: '16:00', breaks: "" ,breakTo:""},
    
  ];

  const [modalShowEditWorktime, setModalShowEditWorktime] = useState(false);


  const [itemEditWorktime, setItemEditWorktime] = useState({id: 0 , day: "", open: "", close: "",breakFrom:"", breakTo:""});


  // const [openTime, setOpenTime] = useState("");
  // const [closeTime, setCloseTime] = useState("");
  // const [breakTimeFrom, setBreakTimeFrom] = useState("");
  // const [breakTimeTO, setBreakTimeTO] = useState("");


  const editWorkTimeHandler = (workday) =>{
    console.log(workday);
    setItemEditWorktime({
      id: 0 ,
       day: workday.day,
        open: workday.open,
         close: workday.close,
          breakFrom:workday.breakFrom,
           breakTo: workday.breakTo
    })
    setModalShowEditWorktime(true)
  }


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
                  <td>{hours.breakFrom === "" ? ` ${hours.breakFrom} - ${hours.breakTo}` : 'None'}</td>
                  <td onClick={()=> editWorkTimeHandler(hours)}><LuEdit style={{color:"green"}}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h6>note : if you have specific day you want to change it , you can use the vactions to change work days and hour</h6>
                
        { modalShowEditWorktime && 
          <EditWorkTimeModal 
            show={modalShowEditWorktime} 
            onHide={() => setModalShowEditWorktime(false)}
            workTimeItem={itemEditWorktime}/>
        }
    </div>

  );
};
export default ShopWorkSchedule