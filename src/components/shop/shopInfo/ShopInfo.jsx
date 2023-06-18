import React ,{useState} from 'react'
import ShopInfoModal from './ShopInfoModal';
import {BsFillTelephoneForwardFill,BsTelephonePlusFill,BsDownload} from 'react-icons/bs';
import {GrLocation} from 'react-icons/gr';
import './shopInfo.css'
function ShopInfo() {

    const [modalShow, setModalShow] = React.useState(false);

 
  return (
    <div className="shop-info">
        <div className='shop-info-code-poster'>
            <h3 >Code : c3g5h1</h3>
            <button>Download Poster <BsDownload style={{scale:1.1}}/></button>
        </div>
        
        <div className='shop-info-row'>
            <div className='shop-info-column'>
                <img src="./assets/barbershop.png" alt=""></img>
            </div>
            <div className='shop-info-column'>
                <h5>
                    Owner : Murad Issa
                </h5> 
                <h5>
                    Name : Salon SPedd 
                </h5>
                <h5>
                    Shop type : Barber
                </h5>
            </div>
            <div className='shop-info-column'>
                <h5>
                    <BsFillTelephoneForwardFill/> 052-6792299  
                </h5>
                <h5>
                    <BsTelephonePlusFill/> 04-692549  
                </h5>
                <h5>
                    <GrLocation/> Tel aviv asfasfa 3 sadfd
                </h5>
            </div>
          
        </div>
        <button  onClick={() => setModalShow(true)}>
            Edit
        </button>
        <ShopInfoModal show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
  )
}

export default ShopInfo