import React from 'react'
import {LuEdit} from 'react-icons/lu';
import AddEmployerModal from './AddEmployerModal';
import "./employes.css" 
import EditEmployerModal from './EditEmployerModal';

function ShopEmployes() {

  const employes = [
    {
      id: 1,
      name: 'John Smith',
      phone: '123-456-7890',
      email: 'john@example.com',
      birthday: '1990-01-01',
      code: 'ABC123',
      avatar:"1",
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '987-654-3210',
      email: 'jane@example.com',
      birthday: '1995-06-15',
      code: 'DEF456',
      avatar:"2",
    },
    {
      id: 3,
      name: 'Michael Johnson',
      phone: '555-123-4567',
      email: 'michael@example.com',
      birthday: '1988-03-21',
      code: 'GHI789',
      avatar:"3",
    },
    {
      id: 4,
      name: 'Emily Williams',
      phone: '222-333-4444',
      email: 'emily@example.com',
      birthday: '1992-12-05',
      code: 'JKL321',
      avatar:"4",
    },
    {
      id: 5,
      name: 'Sarah Thompson',
      phone: '777-888-9999',
      email: 'sarah@example.com',
      birthday: '1985-09-10',
      code: 'MNO987',
      avatar:"5",
    },
    {
      id: 6,
      name: 'David Brown',
      phone: '444-555-6666',
      email: 'david@example.com',
      birthday: '1998-07-18',
      code: 'PQR456',
      avatar:"6",
    },
    {
      id: 7,
      name: 'Olivia Wilson',
      phone: '111-222-3333',
      email: 'olivia@example.com',
      birthday: '1994-04-12',
      code: 'STU789',
      avatar:"7",
    },
    {
      id: 8,
      name: 'Jacob Davis',
      phone: '888-999-0000',
      email: 'jacob@example.com',
      birthday: '1991-02-25',
      code: 'VWX123',
      avatar:"8",
    },
    {
      id: 9,
      name: 'Sophia Anderson',
      phone: '666-777-8888',
      email: 'sophia@example.com',
      birthday: '1993-11-09',
      code: 'YZA456',
      avatar:"9",
    },
    {
      id: 10,
      name: 'William Garcia',
      phone: '333-444-5555',
      email: 'william@example.com',
      birthday: '1987-08-28',
      code: 'BCD789',
      avatar:"10",
    },
    {
      id: 11,
      name: 'Ava Martinez',
      phone: '999-000-1111',
      email: 'ava@example.com',
      birthday: '1997-03-14',
      code: 'EFG321',
      avatar:"11",
    },
    {
      id: 12,
      name: 'James Rodriguez',
      phone: '555-666-7777',
      email: 'james@example.com',
      birthday: '1989-10-20',
      code: 'HIJ654',
      avatar:"12",
    }
  ];

  const [modalShowAddEmployer, setModalShowAddEmployer] = React.useState(false);
  const [modalShowEditEmployer, setModalShowEditEmployer] = React.useState(false);
  const [selectedEditEmployer, setSelectedEditEmployer] = React.useState(null);

  const EditEmployerFunction = (item) =>{
    setSelectedEditEmployer(item);
    setModalShowEditEmployer(true);
}

  return (
    <div className="table-container">
      {/* <button>AddEmployer +</button> */}
      <div className="table">
        {/* <div className='table-header'>
          <h2>Shop Employes</h2>
          <button >AddEmployer +</button>
          
        </div> */}
        <h2>Shop Employes</h2>

        
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Code</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Birthday</th>
              
              <th className='width-100-px '>Edit</th>
            </tr>
          </thead>
          <tbody>
            {employes.map((employer) => (
              <tr key={employer.id}>
                <td><img src={`/assets/avatar${employer.avatar}.png`} style={{width:"40px"}} alt=""/></td>
                <td>{employer.name}</td>
                <td>{employer.code}</td>
                <td>{employer.phone}</td>
                <td>{employer.email}</td>
                <td>{employer.birthday}</td>

                <td onClick={()=>EditEmployerFunction(employer)}><LuEdit style={{color:"green",cursor:"pointer"}} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button style={{marginTop:"2rem"}} onClick={()=>setModalShowAddEmployer(true)}>AddEmployer +</button>

      </div>
      
      {/* { modalShowEditWorktime && 
        <EditWorkTimeModal 
          show={modalShowEditWorktime} 
          onHide={() => setModalShowEditWorktime(false)}
          workTimeItem={itemEditWorktime}/>
      } */}
      { modalShowAddEmployer &&
          <AddEmployerModal show={modalShowAddEmployer} onHide={() => setModalShowAddEmployer(false)} />
      }
      {/* <AddService show={modalShowNewService} onHide={() => setModalShowNewService(false)}/> */}
      { modalShowEditEmployer &&
          <EditEmployerModal show={modalShowEditEmployer} onHide={() => setModalShowEditEmployer(false)} employer={selectedEditEmployer}/>
      }
    </div>
  )
}

export default ShopEmployes