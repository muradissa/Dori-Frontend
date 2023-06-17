import { BrowserRouter ,Routes, Route,Navigate, Outlet } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from "./components/login/Login";
import Personal from "./components/personal/Personal";
import Business from "./components/business/Business";
import Shop from "./components/shop/Shop";
import Notifications from "./components/business/notifications/Notifications";
import Bookings from "./components/business/bookings/Bookings";
import NewBooking from "./components/personal/newBooking/NewBooking";
import MyBookings from "./components/personal/myBookings/MyBookings";
import ShopInfo from "./components/shop/shopInfo/ShopInfo";
import ShopServices from "./components/shop/shopServices/ShopServices";
import ShopEmployes from "./components/shop/shopEmployes/ShopEmployes";
import ShopWorkSchedule from "./components/shop/shopWorkSchedule/ShopWorkSchedule";
import ShopVacationSchedule from "./components/shop/shopVacationSchedule/ShopVacationSchedule";

//import ChangeAccounts from './components/changeaccounts/ChangeAccounts';


function App() {


  const LayoutHome = () => (
    <div>
        <Navbar></Navbar>   
        <Outlet />
        {/* <FooterHome/> */}
    </div>
  );

  const LayoutPersonal = () => (
    <div>
        <Personal></Personal>   
        <Outlet />
    </div>
  );

  const LayoutBusiness = () => (
    <div>
        <Business></Business>   
        <Outlet />
    </div>
  );
  const LayoutShop = () => (
    <div>
        <Shop></Shop>   
        <Outlet />
    </div>
  );

  const Layout = () => (
    <div className="">

      <main className="" >
        {/* <Navbar/> */}
        {/* <Topbar /> */}
        <Navbar></Navbar>   

        <Outlet />
      </main>

    </div>
  );
  return (
    <BrowserRouter>
      <div className="App">
        <Routes >
            <Route element={<LayoutHome />} >
            <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              {/* <Route exact path='/signup' element={<Signup2/>}/> */}
            </Route>
        </Routes>  
       
        <Routes >
          {/* <Route element={<PrivateRoute/>}> */}
            <Route element={<Layout />} >
              {/* <Route exact path='/personal-account' element={<Personal/>}/> */}
              {/* <Route path='/business-account' element={<Business/>}>
                <Route exact path='/business-account/notifications' element={<Notifications/>}/>
              </Route> */}
              <Route exact path='/shop-account' element={<Shop/>}/>
              {/* <Route path='/business-account/notifications' element={<Notifications/>}/> */}
            
              <Route exact path='/personal-account' element={<LayoutPersonal />} >
                <Route exact path='/personal-account/newbooking' element={<NewBooking/>}/>
                <Route exact path='/personal-account/mybookings' element={<MyBookings/>}/>
              </Route> 


              <Route exact path='/business-account' element={<LayoutBusiness />} >
                <Route exact path='/business-account/bookings' element={<Bookings/>}/>
                <Route exact path='/business-account/notifications' element={<Notifications/>}/>
              </Route>  
              {/* <Route  path='/business-account' element={<Business/>}/>
              <Route exact path='/business-account/bookings' element={<Bookings/>}/>
              <Route exact path='/business-account/notifications' element={<Notifications/>}/> */}

              <Route exact path='/shop-account' element={<LayoutShop />} >
                <Route exact path='/shop-account/shop-info' element={<ShopInfo/>}/>
                <Route exact path='/shop-account/servicees' element={<ShopServices/>}/>
                <Route exact path='/shop-account/employees' element={<ShopEmployes/>}/>
                <Route exact path='/shop-account/worktime' element={<ShopWorkSchedule/>}/>
                <Route exact path='/shop-account/vacations' element={<ShopVacationSchedule/>}/>
                <Route exact path='/shop-account/shop-settings' element={<ShopInfo/>}/>

              </Route> 

            </Route>
          {/* </Route>                */}
        </Routes>  
        
      </div>
    </BrowserRouter>
  );
}

export default App;
