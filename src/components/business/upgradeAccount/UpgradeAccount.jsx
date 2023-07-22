import React, { useState } from 'react'
import './upgradeAccount.css';
import Payment from './Payment';
import CardForm from './CardForm';
import Plans from '../../plans/Plans';

import {AiOutlinePlus} from 'react-icons/ai'

function UpgradeAccount() {

  const [plan, setPlan] = useState(JSON.parse(localStorage.getItem('plan')));
  // alert(plan)
  // debugger;
  return (
    <div style={{width:"100%",display:"flex",gap:"2rem",justifyContent:"center"}}>
        {/* <Payment></Payment> */}

        {/* <Plans></Plans> */}
        {/* <div style={{width:"fit-content"}}>
          <CardForm></CardForm>
          

        </div> */}

        <CardForm></CardForm>
        {/* <div className="single-price" style={{height:"100%"}}>
            <div className="deal-top">
                <h3>{plan[0].title}</h3>
                <h4> 9 <span className="sup">$</span><span className="sup-month">/ month</span>  </h4> 
            </div>
            <div className="deal-bottom">
                <ul className="deal-item">
                    <li>{plan[0].subtitle}</li>
                    <li><AiOutlinePlus className="deal-item-icon"></AiOutlinePlus>1 Employer</li>
                    <li><AiOutlinePlus className="deal-item-icon"></AiOutlinePlus>3 Services</li>
                    <li><AiOutlinePlus className="deal-item-icon"></AiOutlinePlus>5 Vactions</li>
                    <li><AiOutlinePlus className="deal-item-icon"></AiOutlinePlus>500 gb Bandwidth </li>
                    <li><AiOutlinePlus className="deal-item-icon"></AiOutlinePlus>24 hour Support </li>
                </ul>
   
            </div>
        </div> */}
        <div className="single-price" style={{height:"100%"}}>
                        <div className="deal-top">
                            <h3>{plan[0].title}</h3>
                            <h4> {plan[0].price} <span className="sup">$</span><span className="sup-month">/ month</span>  </h4> 
                        </div>
                        <div className="deal-bottom">
                            <ul className="deal-item">
                                <li>{plan[0].subtitle}</li>
                                {
                                    plan[0].features.map((feature) => <li><AiOutlinePlus className="deal-item-icon"></AiOutlinePlus>{feature}</li>)
                                }
                            </ul>
                          
                        </div>
                    </div>
    </div>
  )
}

export default UpgradeAccount;