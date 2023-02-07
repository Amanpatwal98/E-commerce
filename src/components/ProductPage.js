import React, { useEffect, useState } from 'react'
import  {Data} from "./Data";
import "./Star.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from '../redux/actions/RegisterAction';
import  Axios  from 'axios';


const Products = () => { 

const [cdata,setCdata] = useState(Data);

const getState = useSelector((state)=> state)
console.log(getState);
const dispatch = useDispatch();




// useEffect(()=>{
//   Axios.post("http://localhost:4000/login")
//   .then(res=>setCdata(res.data))

// })


const send = (e)=>{
  dispatch(ADD(e));
} 

 return (

    <div className="c1>">
{cdata.map((item,id)=>{
                  item.quantity = 1;

         return(
                  <div className="c2" key={item.id} >

                                       <img src={item.image}   className="CI" alt="cart"/>
                 <div className="cO">
                                       {item.title} 
                                       <br/>
                                       Rating: {item.rating.rate}
                         <br/>
                                        Price : ₹ {item.price}
                                                               </div> 

 <button type="button" className ="cB" onClick={() => send(item)}> Add to Cart</button>
      </div>                                           
                  )})}
            </div>
            
               );
}             
export default Products;





// export default Products;







// 


// import React from "react";
// import {Data} from "./Data";
// import "./Star.css";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// const Products = () => {
//   const cart = useSelector((state) => state);
//   console.log(cart);
//   const dispatch = useDispatch();


//   return (
//     <div className="c1>">

// <Link to="/Cart" style={{fontSize:22}}> Go Go gO</Link>

//     {Data.map((item)=>{
//                   item.quantity = 1;

//          return(
//                   <div className="c2"
//                                               key={item.id}>

//                                        <img src={item.image}   className="CI" alt="cart"/>
//                  <div className="cO">
//                                        {item.title} Rating: {item.rating.rate}
//                          <br/>
//                                         Price :{item.price}
//                                                                </div> 

//  <button type="button" className ="cB" onClick={() => dispatch({ type: "ADD", payload: item })}> Add to Cart</button>
//       </div>                                           
//                   )})}
//             </div>);
            
// }             
                  
                  

                  

// export default Products;




// // import React from "react";
// // import {useSelector,useDispatch} from 'react-redux'
// // import { Link } from "react-router-dom";
// // import Data from "./components/Data";


// //     const ProductPage=()=>{
// //         const storeState = useSelector(state => state)
// //          const dispatch=useDispatch();


// // return(
// //     <>
// //       <h4> {Data.slice(0,6).map((item)=>{
// //           item.quantity = 1;
// //           return(
// //                                                 <span key={item.id}>
// //                                                 <h4>{item.id}</h4>
// //                                                 <h4>{item.title}</h4>
// //                                                 <h4>{item.price}</h4>
// //                                                 <h4>{item.description.slice(0,10)}</h4>
// //                                                 <h4>{item.category}</h4>
// //                     <img src={item.image} width="200" height="200"/>
// //                                                 <h4>{item.rating.rate}</h4>
// // <button onClick={() => dispatch({ type: "ADD", payload: item })}> add to cart </button>                                                </span>
                                             
// //                                              ); })}</h4>

// //     </>
// // );
// //     }

// //     export default ProductPage;

      