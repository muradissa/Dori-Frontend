import React ,{useState} from 'react'

function NavShop({changeComponent}) {
    const [shopSection, setShopSection] = useState(1);
    const eventHandlerBtns =(selected) =>{
      if(selected ===1){
        setShopSection(1)
        changeComponent("Shop Info")
      }
      else if(selected ===2){
        setShopSection(2)
        changeComponent("Servicees")
      }
      else if(selected ===3){
        setShopSection(3)
        changeComponent("Employes")
      }else if(selected ===4){
        setShopSection(4)
        changeComponent("Worktime")
      }else if(selected ===5){
        setShopSection(5)
        changeComponent("Vacations")
      }else if(selected ===6){
        setShopSection(6)
        changeComponent("Shop Settings")
      }
      
    }
    return (
        <div className='navPersonal'>     
            <button className={"btn-radio "+ `${shopSection==1 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(1)}>Shop Info</button>
            <button className={"btn-radio "+ `${shopSection==2 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(2)}>Servicees</button>
            <button className={"btn-radio "+ `${shopSection==3 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(3)}>Employes</button>
            <button className={"btn-radio "+ `${shopSection==4 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(4)}>Worktime</button>
            <button className={"btn-radio "+ `${shopSection==5 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(5)}>Vacations</button>
            <button className={"btn-radio "+ `${shopSection==6 ? "btn-radio-selected":""}` } onClick={()=> eventHandlerBtns(6)}>Shop Settings</button>

        </div>
    )
}

export default NavShop