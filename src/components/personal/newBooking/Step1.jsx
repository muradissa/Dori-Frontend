import React,{useState,useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {AiOutlineSearch,AiFillStar,AiOutlinePlus} from 'react-icons/ai';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {GrLocation} from 'react-icons/gr';
// import {canNotFind} from ''
function Step1() {
  const [choosingType,setChoosingType] = useState(1);

  return (
    <div className='search-step'>
        <div className='search-step-left'>
          <div className='search-favorite'>
            <button className='btn-radio btn-search' onClick={()=>setChoosingType(1)}>
              Search <AiOutlineSearch/>
            </button>
            <button className='btn-radio btn-favorite' onClick={()=>setChoosingType(2)}>
              Favorites <AiFillStar/>
            </button>
          </div>
          {choosingType === 1 &&
            <>
              <div className='search'>
                  <input type='text' placeholder='Enter business Code' className='search-inputtt'></input> 
                  <button className='serach-iconnn'>Search <AiOutlineSearch/></button>
              </div>
              <h6>Enter Store Code</h6>
            </>
          }   
          {choosingType === 2 && 
            <div className='favorite'>
              <DropdownButton id="dropdown-basic-button" title="choose store">
                <Dropdown.Item >Store 1</Dropdown.Item>
                <Dropdown.Item >Store 2</Dropdown.Item>
                <Dropdown.Item >Store 3</Dropdown.Item>
              </DropdownButton>
            </div>
          }
        </div>
        <div className='search-step-right' style={{display:""}}>
          <div className='store-info'>
            <img src="/assets/barbershop.png" alt=""></img>
            <h5>Salon SPedd</h5>
            {/* <h6>Barber</h6> */}
            <br/>
            <h5>Murad Issa</h5>
            <h5>
              <BsFillTelephoneForwardFill/> 052-6792299  
              <br/>
              <GrLocation/> Tel aviv asfasfa 3 sadfd</h5>
            <br/>
            <button className='add-to-favorite'>Add to Favorite <AiOutlinePlus/></button>
            {/* <button className='add-to-favorite'>Add to Favorite +</button> */}
            {/* <button className='remove-from-favorite'>Remove from Favorite +</button> */}

          </div>
        </div>
        {
          <div className='search-step-right' style={{display:"none"}}>
            <img  src={`/assets/can not find.webp`}alt="" style={{maxWidth:"80%"}}></img>
            <h5 style={{}}>Store not found , try again!</h5>
          </div>
        }
        {
          <div className='search-step-right' style={{display:"none"}}>
            <img  src={`/assets/business-analysis.gif`}alt="" style={{maxWidth:"80%"}}></img>
            <h5 style={{}}>Searching . . .</h5>
          </div>
        }
        {
          <div className='search-step-right' style={{display:"none"}}>
            <img  src={`/assets/task-appointment-management.png`}alt="" style={{maxWidth:"80%"}}></img>
            {/* <h5 style={{}}>Enter Business Code</h5> */}
          </div>
        }

      </div>
  )
}

export default Step1