
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

import { useDispatch, useSelector } from 'react-redux'
import { INCREASE,ADD,REMOVE ,DECREASE} from '../redux/actions/RegisterAction'
import {Payment } from './Payment1'


const Cart = () => {
  const getState = useSelector((state)=>state);
 
  const auth=localStorage.getItem('user');

  
  
const {id}=useParams();

  console.log(getState);
  const dispatch = useDispatch();

  
  
  const send = (e)=>{
    dispatch(ADD(e));
  }
  
  const remove = (item)=>{
    dispatch(REMOVE(item));
}

const inc = (item)=>{
  dispatch(INCREASE(item));
}

const dec = (item)=>{
  dispatch(DECREASE(item))
}

  return (
<>
{getState.length === 0 ?
  (
              <div className='v'>
               <h1>Your basket is empty</h1>
                  </div>

  ) : ( //if else 
  <>

      <h1> Your basket Is Here </h1>
        <div className="v1">

    <table>

   <th>Product Image</th>
   <th> Product title</th> 
   <th> Product Price</th>
      <th>Remove</th>
      <th>Quantity</th>

<br/>
<br/>
     {getState.map((item) => {

       return (
        <tr key={item}>
             <td><img src={item.image} alt="cart" width="180" height="180"/></td>
              <td> {item.title}</td>           
              <td> {item.price}</td>
            {/* <p> <strong>Amount: Rs.</strong>. {item.price * item.quantity}</p>
            <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}> */}

 <td >< button onClick={() => remove(item)}> Remove </button></td>
<br/>
 <span style={{fontSize:22}}>  Quantity: {item.quantity}</span>

 <td> <button style={{fontSize:24}} onClick={item.quantity > 1 ? ()=>dec(item) : ()=>remove(item)}>-  </button></td>
                
  <td> <button style={{fontSize:24}}  onClick={() => inc(item)}> + </button></td>
</tr>

                    );
           })}
  </table>


  <Link to="/Payment1">
          <button >Proceed To Payment</button>
        </Link> 
        </div>
    </>)
    }
  </>);
};
export default Cart;
















// import React from "react";
// import { Link } from "react-router-dom";
// import "./Star.css";
// import { useSelector, useDispatch } from "react-redux";


// const Cart = () => {
//   const cart = useSelector((state) => state);
//   console.log(cart);
//   const dispatch = useDispatch();


//   return (
//     <>
//       <Link to="/Cart"/>

//      {cart.map((item)=>{
//                   return(
//                     <>
//                                                      <tr key={item.id}>
//              <img src={item.image} width="200" height="200" alt="cart"/>

//                                                         <h4>{item.title}</h4>
//                                                         <h4> price: {item.price}</h4>
//                                                         <h4>{item.category}</h4>
//                                                         </tr>
// <button  onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>    

//   <p>Quantity:{item.quantity}</p>

// <button  onClick={() =>{
//   if(item.quantity > 1) {
//   dispatch({ type: "DECREASE", payload: item });
// }
// else{
//   dispatch({ type: "REMOVE", payload: item });
//  }
//  } }>-</button>  
  



//           <br/>
//           <br/>                                    
//        <br/>                                                 
//      <button className="CR" onClick={() => dispatch({ type: "REMOVE", payload: item })}> REMOVE</button>

                                                    
//                                                      </>); })}
//                                                     </>);
// }
        
// export default Cart;
