import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import './personal.css'
function NavPersonal() {

    const [personalSection, setPersonalSection] = useState(1);
    const type= "radio";
  return (
    <div className='navPersonal'>
        {/* <Form>   
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            reverse
            label="1"
            name="group1"
            type="radio"
            id={`reverse-${type}-1`}
            default
          />
          <Form.Check
            reverse
            label="2"
            name="group1"
            type="radio"
            id={`reverse-${type}-2`}
          />
          <Form.Check
            reverse
            disabled
            label="3 (disabled)"
            type="radio"
            id={`reverse-${type}-3`}
          />
        </div>
        </Form> */}

        <button className={"btn-radio "+ `${personalSection==1 ? "btn-radio-selected":""}` } onClick={()=> setPersonalSection(1)}>New Reservation</button>
        <button className={"btn-radio "+ `${personalSection==2 ? "btn-radio-selected":""}` } onClick={()=> setPersonalSection(2)}>My Reservation</button>


    </div>
  )
}

export default NavPersonal