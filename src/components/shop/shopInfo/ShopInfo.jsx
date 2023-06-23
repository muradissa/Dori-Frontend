import React ,{useState} from 'react'
import ShopInfoModal from './ShopInfoModal';
import {BsFillTelephoneForwardFill,BsTelephonePlusFill,BsDownload,} from 'react-icons/bs';
import {GrLocation} from 'react-icons/gr';
import {FaEye} from 'react-icons/fa';
import {LuEdit} from 'react-icons/lu';


import './shopInfo.css'
import ShopInfoPoster from './ShopInfoPoster';
function ShopInfo() {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalPosterShow, setModalPosterShow] = React.useState(false);

 
  return (
    <div className="shop-info">
        <div className='shop-info-code-poster'>
            <h3 >Code : c3g5h1</h3>
            <button className='btn-secondary'  onClick={()=>{
                setModalPosterShow(true);
            }}>Show Poster <FaEye style={{scale:1.5}}/> / <BsDownload style={{scale:1.5}}/></button>
        </div>
        
        <div className='shop-info-row'>
            <div className='shop-info-column'>
                <img src="/assets/barbershop.png" alt=""></img>
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
        <button  className='btn-primary' onClick={() => setModalShow(true)}>
            Edit <LuEdit style={{marginLeft:"10px",color:"white",scale:"1.1"}}/>
        </button>
        {modalShow && 
            <ShopInfoModal show={modalShow} onHide={() => setModalShow(false)}/>
        }

        {modalPosterShow && 
            <ShopInfoPoster show={modalPosterShow} onHide={() => setModalPosterShow(false)}/>
        }

        {/* <ShopInfoPoster></ShopInfoPoster> */}
        
    </div>
  )
}

export default ShopInfo