import React, { useEffect, useState } from 'react';
import { useNavigate  } from "react-router-dom";
import './plans.css';
import {AiOutlinePlus} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';

const Plans = () => {

    const navigate = useNavigate ();

    const plansData = [
        {
            title : "PRO",price:"9",subtitle: "Key benefits of Pro",features:["1 Employer" , "4 Services","10 Vactions","send email if customer canceled the appoitment ","1 Avaliable Posters"]
        },
        {
            title : "Pro Plus",price:"19",subtitle: "The complete package, with",features:["3 Employer" , "8 Services","20 Vactions","Send email if customer order or canceled the appoitment ","3 Avaliable Posters"]
        },
        {
            title : "PREMIUM",price:"29",subtitle: "All the advantages of Pro, plus",features:["10 Employer" , "12 Services","50 Vactions","Send email if customer order or canceled the appoitment ","5 Avaliable Posters"]
        }
    ]

    const movetoPaymentPageFunc = (planTitle) =>{
        const plan = plansData.filter(planItem => planItem.title === planTitle)
        localStorage.removeItem("plan");
        localStorage.setItem("plan",JSON.stringify(plan));
        if(planTitle){
            navigate("/shop-account/payment");
        }

    }

    return (

    <div className="pricing-area">
        <div className="container">
            <div className="row">
                {plansData.map((plan) => (
                    <div className="single-price">
                        <div className="deal-top">
                            <h3>{plan.title}</h3>
                            <h4> {plan.price} <span className="sup">$</span><span className="sup-month">/ month</span>  </h4> 
                        </div>
                        <div className="deal-bottom">
                            <ul className="deal-item">
                                <li>{plan.subtitle}</li>
                                {
                                    plan.features.map((feature) => <li><AiOutlinePlus className="deal-item-icon"></AiOutlinePlus>{feature}</li>)
                                }
                                <li>{" "}</li>
                            </ul>
                            <div className="btn-area">
                                {/* <a  href="/shop-account/payment" onClick={movetoPaymentPage(plan.title)}>Pay</a>        */}
                                <button  onClick={(e) => movetoPaymentPageFunc(plan.title)}>Pay</button>       

                            </div>
                        </div>
                    </div>
                ))}
                    
            </div>
        </div>       


    </div>
  );
};

export default Plans;