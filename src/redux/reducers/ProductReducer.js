





// const INIT_STATE = {
//   dark: []
// };


//  const ProductReducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//       case "ADD":

//       const Sim = state.dark.findIndex((item)=> item.id === action.payload.id);

//       if(Sim >= 0){
//           state.dark[Sim].qnty +=1
//           return {
//               ...state,
//               dark:[...state.dark]
//           }
//       }else{
//           const temp = {...action.payload,qnty:1}
//            return {
//               ...state,
//               dark: [...state.dark, temp]
//           }
//       }

         

//       case "REMOVE":
//           const data = state.dark.filter((el)=>el.id !== action.payload); 
//           // console.log(data);

//           return {
//               ...state,
//               dark:data
//           }

//       case "RMV_ONE":
//           const Sim_dec = state.dark.findIndex((item)=> item.id === action.payload.id);
 
//           if(state.dark[Sim_dec].qnty >= 1){
//               const dltitems = state.dark[Sim_dec].qnty -= 1
//               console.log([...state.dark,dltitems]);

//               return {
//                   ...state,
//                   dark:[...state.dark]
//               }
//           }else if(state.dark[Sim_dec].qnty === 1 ){
//               const data = state.dark.filter((el)=>el.id !== action.payload);

//               return {
//                   ...state,
//                   dark:data
//               }
//           }

//       default:
//           return state
//   }
// }


const ProductReducer = (cart = [], action) => {
        if (action.type === "ADD") {
          let tempcart = cart.filter((item) => item.id === action.payload.id);
          
          if (tempcart < 1) {
            return [...cart, action.payload];
          } else {
            return cart;
          }
        }
        
        if (action.type === "REMOVE") {
          return cart.filter((item) => item.id !== action.payload.id);
        }
        
        if (action.type === "INCREASE") {
          let tempcart = cart.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          return tempcart;
        }
        if (action.type === "DECREASE") {
          let tempcart = cart.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
          return tempcart;
        }
        return cart;
      };







// const ProductReducer = (cart = [], action) => {
//     if (action.type === "ADD") {
//               let tempcart = cart.filter((item) => item.id === action.payload.id);
//               if (tempcart < 1) {
//                 return [...cart, action.payload];
//               } else {
//                 return cart;
//               }
//             }


//   if (action.type === "REMOVE") {
//     return cart.filter((item) => item.id !== action.payload.id);
//   }

//   if (action.type === "INCREASE") {
//     let tempcart = cart.map((item) => {
//       if (item.id === action.payload.id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     return tempcart;
//   }

//   if (action.type === "DECREASE") {
//     let tempcart = cart.map((item) => {
//       if (item.id === action.payload.id) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     return tempcart;
//   }
//   return cart;
// };
export default ProductReducer
//   ;


