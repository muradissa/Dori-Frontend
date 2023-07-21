import React from 'react'
import './upgradeAccount.css'
import Payment from './Payment';
import CardForm from './CardForm';
import Plans from '../../plans/Plans';


function UpgradeAccount() {
  return (
    <div style={{width:"100%"}}>
        {/* <Payment></Payment> */}

        <Plans></Plans>
        <div style={{width:"fit-content"}}>
          <CardForm></CardForm>

        </div>
    </div>
  )
}

export default UpgradeAccount;