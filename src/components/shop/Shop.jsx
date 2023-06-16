import React ,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './shop.css';
import ShopInfo from './shopInfo/ShopInfo';
import ShopServices from './shopServices/ShopServices';
import ShopWorkSchedule from './shopWorkSchedule/ShopWorkSchedule';
import ShopVacationSchedule from './shopVacationSchedule/ShopVacationSchedule';
import ShopEmployes from './shopEmployes/ShopEmployes';
function Shop() {

    const [openAccordion,setOpenAccordion] = useState([
        {id: 0, show: false},
        {id: 1, show: false},
        {id: 2, show: false},
        {id: 3, show: false},
        {id: 4, show: false},
    ])

    const toggleAccordion = async (id) => {
        setOpenAccordion((prevAccordions) =>
          prevAccordions.map((accordion) =>
            accordion.id === id ? { ...accordion, show: !accordion.show } : accordion
          )
        );
        await new Promise(resolve => setTimeout(resolve, 100));
    };



  return (
    <div className='shop-account'>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0">
                <Accordion.Header as="h1" onClick={()=>toggleAccordion(0)}>Shop Info</Accordion.Header>
                <Accordion.Body>
                    {
                        openAccordion[0].show === false && <ShopInfo/>
                    }
                    
                </Accordion.Body>
            </Accordion.Item>
           
            <Accordion.Item eventKey="1">
                <Accordion.Header onClick={()=>toggleAccordion(1)}>Services Info</Accordion.Header>
                <Accordion.Body>
                {
                    openAccordion[1].show === true && <ShopServices/>
                }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header onClick={()=>toggleAccordion(2)}>Employers Info</Accordion.Header>
                <Accordion.Body>
                {
                    openAccordion[2].show === true && <ShopEmployes/>
                }
                    
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header onClick={()=>toggleAccordion(3)}>Working days and hours</Accordion.Header>
                <Accordion.Body>
                {
                    openAccordion[3].show === true && <ShopWorkSchedule/>
                }
                    
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" >
                <Accordion.Header onClick={()=>toggleAccordion(4)}>Days and hours of Vacations </Accordion.Header>
                <Accordion.Body>
                {
                    openAccordion[4].show === true && <ShopVacationSchedule/>
                }
                    
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default Shop