import React ,{useState} from 'react'

function Step1() {
    
    const [chooseService,setChosenService] = useState(0);
    const [chooseEmployer,setChosenEmployer] = useState(0)


    const listOfServices = [
        {
            id:0,
            name:"massage"
        },
        {
            id:1,
            name:"Math 5 units"
        },
        {
            id:2,
            name:"Math Homework"
        }, 
        {
            id:3,
            name:"massage"
        },
        {
            id:4,
            name:"Math 5 units"
        },
        {
            id:5,
            name:"Math Homework"
        }, 
        {
            id:6,
            name:"massage"
        },
        {
            id:7,
            name:"Math 5 units"
        },
        {
            id:8,
            name:"Math Homework"
        }, 
    ]

    const listOfEmployers = [
        {
            id:0,
            name:"John Avhent",
            image:"avatar10.png",
        },
    ]
  return (
    
    <div className='step1'>
        <div className='step1-left'>
            <div className="list-of-services">
                {listOfServices.map(service => 
                    <div key={service.id}
                        className={"item-service "+ `${service.id === chooseService ? " selected-service":""}` }
                        onClick={()=> setChosenService(service.id)}
                    >
                        <span >{service.name}</span>
                    </div>
                )}
            </div>
        </div>
        <div className='step1-right'>
            <div className="list-of-employers">
                {listOfEmployers.map(employer => 
                    <div key={employer.id}
                        className={"item-employer "+ `${employer.id === chooseEmployer ? " selected-employer":""}` }
                        onClick={()=> setChosenEmployer(employer.id)}
                    >
                        <img className="item-employer-img" src={`./assets/${employer.image}`} alt=""></img>
                        <span >{employer.name}</span>
                    </div>
                )}
            </div>
        </div>

    </div>
  )
}

export default Step1