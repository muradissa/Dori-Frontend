import React from 'react'
import {BsFillXCircleFill ,BsCheckCircleFill, BsQuestionCircleFill, BsInfoCircleFill} from 'react-icons/bs';
import {AiFillWarning  } from 'react-icons/ai';

// AiFillWarning  MdDone ImNotification TiDelete
// BsFillXCircleFill BsCheckCircleFill BsQuestionCircleFill BsInfoCircleFill
function NotificationBox() {
  return (
    <div className="container-fluid text-center">
        <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-alert">
                        <div className="info-tab tip-icon-alert" title="error">
                            <BsQuestionCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-alert">
                            {/* <!--<p><strong>Tip:</strong> If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual className.</p>--> */}
                            {/* <p style={{textAlign:"start"}}>Appointment request</p> */}
                            <div className="tip-message-box row">
                                <p className='col-xs-12 col-sm-6 col-md-3'>John Sawea  050-3278422</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>Haircut 20min Ahmasd Tofee</p>
                                <p className='col-xs-12 col-sm-6 col-md-3'>12:30 - 12/6/2023</p>
                                {/* <p className='col-xs-12 col-sm-6 col-md-3'><a className="btn btn-sm" href="555"> intente nuevamente</a></p> */}
                                <div className='col-xs-12 col-sm-6 col-md-3 message-box-tip-buttons'>
                                    <button><BsCheckCircleFill style={{color:"green",scale:"1.5"}}/></button> 
                                    <button><BsFillXCircleFill style={{color:"red" ,scale:"1.5"}}/></button> 

                                </div>
                            </div>
                            {/* <p>
                                John Sawea , 050-3278422 , Haircut 20min Ahmasd Tofee , 12:30 - 12/6/2023 
                                <a className="btn btn-sm" href="555"> intente nuevamente</a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-danger">
                        <div className="info-tab tip-icon-danger" title="error">
                            <BsFillXCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-danger">
                            {/* <!--<p><strong>Tip:</strong> If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual className.</p>--> */}
                            <p>Ha ocurrido un problema por favor 
                            <a className="btn btn-sm" href="555"> intente nuevamente</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-success">
                        <div className="info-tab tip-icon-success" title="success">
                            <BsCheckCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-success">
                            {/* <!--<p><strong>Tip:</strong> If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual className.</p>--> */}
                            <p>Ha ocurrido un problema por favor 
                            <a className="btn btn-sm" href="555"> intente nuevamente</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-warning">
                        <div className="info-tab tip-icon-warning" title="error">
                            <AiFillWarning className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-warning">
                            {/* <!--<p><strong>Tip:</strong> If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual className.</p>--> */}
                            <p>Ha ocurrido un problema por favor 
                            <a className="btn btn-sm" href="555"> intente nuevamente</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                <div className="new-message-box">
                    <div className="new-message-box-info">
                        <div className="info-tab tip-icon-info" title="error">
                            <BsInfoCircleFill className='message-box-tip-icon'/>
                            <i></i>
                        </div>
                        <div className="tip-box-info">
                            {/* <!--<p><strong>Tip:</strong> If you want to enable the fading transition effect while closing the alert boxes, apply the classes <code>.fade</code> and <code>.in</code> to them along with the contextual className.</p>--> */}
                            <p>Ha ocurrido un problema por favor 
                            <a className="btn btn-sm" href="555"> intente nuevamente</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default NotificationBox