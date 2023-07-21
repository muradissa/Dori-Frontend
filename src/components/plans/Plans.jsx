import React from 'react';
import './plans.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Plans = () => {
  return (
    // <div className="plans-container">
    //   <div className="row">
    //     <div className="col-md-4 mb-4">
    //       <div className="plan-card">
    //         <div className="plan-title">Plan 1</div>
    //         <div className="plan-price">$10/month</div>
    //         <ul className="plan-features">
    //           <li>Feature 1</li>
    //           <li>Feature 2</li>
    //           <li>Feature 3</li>
    //         </ul>
    //         <button className="btn btn-primary plan-button">Select Plan</button>
    //       </div>
    //     </div>

    //     <div className="col-md-4 mb-4">
    //       <div className="plan-card">
    //         <div className="plan-title">Plan 2</div>
    //         <div className="plan-price">$20/month</div>
    //         <ul className="plan-features">
    //           <li>Feature 1</li>
    //           <li>Feature 2</li>
    //           <li>Feature 3</li>
    //         </ul>
    //         <button className="btn btn-primary plan-button">Select Plan</button>
    //       </div>
    //     </div>

    //     <div className="col-md-4 mb-4">
    //       <div className="plan-card">
    //         <div className="plan-title">Plan 3</div>
    //         <div className="plan-price">$30/month</div>
    //         <ul className="plan-features">
    //           <li>Feature 1</li>
    //           <li>Feature 2</li>
    //           <li>Feature 3</li>
    //         </ul>
    //         <button className="btn btn-primary plan-button">Select Plan</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="pricing-area">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"> */}
                    <div className="single-price">
                        <div className="deal-top">
                            <h3>Basic</h3>
                            <h4> 9 <span className="sup">$</span> </h4> 
                        </div>
                        <div className="deal-bottom">
                            <ul className="deal-item">
                                <li>1 Employer</li>
                                <li>3 Services</li>
                                <li>5 Vactions</li>
                                <li>500 gb Bandwidth </li>
                                <li>24 hour Support </li>
                            </ul>
                            <div className="btn-area">
                                <a href="#">Pay</a>       
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"> */}
                    <div className="single-price">
                        <div className="deal-top">
                            <h3>Standard</h3>
                            <h4> 19 <span className="sup">$</span> </h4>
                        </div>
                        <div className="deal-bottom">
                            <ul className="deal-item">
                                <li>3 Employer</li>
                                <li>10 Services</li>
                                <li>20 Vactions</li>
                                <li>1 TB Bandwidth </li>
                                <li>24 hour Support </li>
                            </ul>
                            <div className="btn-area">
                                <a href="#">Pay</a>       
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"> */}
                    <div className="single-price">
                        <div className="deal-top">
                            <h3>Professional</h3>
                            <h4> 29 <span className="sup">$</span> </h4> 
                        </div>
                        <div className="deal-bottom">
                            <ul className="deal-item">
                                <li>10 Employer</li>
                                <li>20 Services</li>
                                <li>30 Vactions</li>
                                <li>5 TB Bandwidth </li>
                                <li>24 hour Support </li>
                            </ul>
                            <div className="btn-area">
                                <a href="#">Pay</a>       
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>       


    </div>
  );
};

export default Plans;