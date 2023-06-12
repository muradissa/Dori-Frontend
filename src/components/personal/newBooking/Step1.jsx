import React ,{useState} from 'react'

function Step1() {
    
    const [chooseService,setChosenService] = useState(0)

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

        </div>

    </div>
  )
}

export default Step1