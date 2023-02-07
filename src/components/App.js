import './App.css';
import React,{useState,useContext} from "react"

import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router } from "react-router-dom";
import Admin from './components/Admin';
import ProductPage from './components/ProductPage'
import Cart from "./components/Cart";
import Payment1 from "./components/Payment1";
// import Body from "./components/body"

import Header from "./components/Header"
import {Route,Routes} from 'react-router-dom'
import NoteContext from './components/NoteContext';
import NotState from './components/NotState';

function App() {

//  const [ auth, setLoginUser] = useSt


  return (
    
    <div className="App">
     

      <Header/> 
     {/* <Body/> */}


<NotState>
 <Routes>
 <Route path="/" element={<ProductPage />} />
 <Route path="/login" element={<Login/>}/>
 <Route path="/register" element={<Register/>}/>
 <Route path="/Admin" element={<Admin/>}/>

<Route path="/cart" element={<Cart/>}/>
<Route  path="Payment1" element={<Payment1/>}/>
  {/* <Route path="/Body" element={<Body/>}/> */}

</Routes>
</NotState>
    </div>
  );

}

export default  App;
