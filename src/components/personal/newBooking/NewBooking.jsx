import React,{useState,useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import {AiOutlineSearch,AiFillStar,AiOutlinePlus} from 'react-icons/ai';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {GrLocation} from 'react-icons/gr';
// import {FaHeartCirclePlus} from 'react-icons/fa-heart';
import BookingStepper from './BookingStepper';


function NewBooking() {

  const [choosingType,setChoosingType] = useState(1);
  return (
    <div className='new-booking'>

      <div className='left-side'>

        <div className='search-favorite'>
          <button className='btn-radio btn-search' onClick={()=>setChoosingType(1)}>
            Search <AiOutlineSearch/>
          </button>
          <button className='btn-radio btn-favorite' onClick={()=>setChoosingType(2)}>
            Favorites <AiFillStar/>
          </button>
        </div>

        {choosingType === 1 &&
          <div className='search'>
              <h5>Enter Store Code OR Name</h5>
              <input type='text' className='search-input'></input> 
              <button className='serach-icon'><AiOutlineSearch/></button>
          </div>
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

        <div className='store-info'>
          <img src="./assets/barbershop.png" alt=""></img>
          <h5>Salon SPedd</h5>
          <h6>Barber</h6>
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

      <div className='right-side'>
        <BookingStepper/>
      </div>
      

    </div>
  )
}

export default NewBooking