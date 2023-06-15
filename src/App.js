import { BrowserRouter ,Routes, Route,Navigate, Outlet } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from "./components/login/Login";
import Personal from "./components/personal/Personal";
import Business from "./components/business/Business";
import Shop from "./components/shop/Shop";

//import ChangeAccounts from './components/changeaccounts/ChangeAccounts';


function App() {


  const LayoutHome = () => (
    <div>
        <Navbar></Navbar>   
        <Outlet />
        {/* <FooterHome/> */}
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
              <Route exact path='/personal-account' element={<Personal/>}/>
              <Route exact path='/business-account' element={<Business/>}/>
              <Route exact path='/shop-account' element={<Shop/>}/> 



            </Route>
          {/* </Route>                */}
        </Routes>  
        
      </div>
    </BrowserRouter>
  );
}

export default App;
