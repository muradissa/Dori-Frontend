import React ,{useState}from 'react';
import {LuEdit} from 'react-icons/lu';

import './shopServices.css'
import EditServices from './EditServices';
import AddService from './AddService';
function ShopServices() {
    const [modalShowNewService, setModalShowNewService] = React.useState(false);
    const [modalShowEditService, setModalShowEditervice] = React.useState(false);
    const [itemServiceEdit, setItemServiceEdit] = useState(null);
    const services = [
        { id: 1, name: 'Massage', time: '30min' },
        { id: 2, name: 'Haircut', time: '45min' },
        { id: 3, name: 'Shave', time: '30min' },
        { id: 4, name: 'Beard Trim', time: '15min' },
        { id: 5, name: 'Facial', time: '60min' },
        { id: 6, name: 'Hair Styling', time: '60min' },
        { id: 7, name: 'Hair Coloring', time: '90min' },
        { id: 8, name: 'Hot Towel Treatment', time: '15min' },
        { id: 9, name: 'Head Shave', time: '30min' },
        { id: 10, name: 'Neck Trim', time: '15min' },
        { id: 11, name: 'Eyebrow Shaping', time: '15min' },
        { id: 12, name: 'Scalp Treatment', time: '30min' },
        { id: 13, name: 'Mustache Trim', time: '10min' },
        { id: 14, name: 'Shampoo and Conditioning', time: '30min' },
        { id: 15, name: 'Straight Razor Shave', time: '45min' },
        { id: 16, name: 'Clipper Cut', time: '30min' },
        { id: 17, name: 'Beard Design', time: '30min' },
        { id: 18, name: 'Hair Extensions', time: '120min' },
        { id: 19, name: 'Hair Treatments', time: '45min' },
        { id: 20, name: 'Facial Waxing', time: '15min' },
      ];

    const EditServiceFunction = (item) =>{
        setItemServiceEdit(item);
        setModalShowEditervice(true);
    }

    return (
        <div className='shop-services-container'> 
            <div className='shop-services'>
                {services.map(item => 
                <div className='shop-services-item' onClick={() => EditServiceFunction(item)}>
                    <h6>{item.name} </h6>
                    <h6>{item.time} <LuEdit style={{color:"green",scale:"1.1"}}/></h6>
                </div>
                    
                )}
            </div>
            <button className="btn-save" onClick={() => setModalShowNewService(true)} >
                New Service
            </button>

            { modalShowEditService &&
                <EditServices show={modalShowEditService} onHide={() => setModalShowEditervice(false)} serviceItem={itemServiceEdit}/>
            }
            <AddService show={modalShowNewService} onHide={() => setModalShowNewService(false)}/>
        </div>
    )
}

export default ShopServices