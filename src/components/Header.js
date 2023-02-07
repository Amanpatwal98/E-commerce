import Navbar from 'react-bootstrap/Navbar'
import { useSelector ,} from 'react-redux';
import React, {useEffect,useContext } from "react"

import { NavLink,Link,useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NoteContext from './NoteContext';


import './Star.css';
import { OneKk } from '@mui/icons-material';

const Header = () => {

  const valueContext=useContext(NoteContext);

  const navigate =useNavigate();
  const getState = useSelector((state) => state);
  const auth=localStorage.getItem('user');
  // const user=localStorage.getItem('name');
// console.log(user)


const logOut=()=>{
  
  localStorage.clear();
  valueContext.setIsLogin(false);
  navigate("/");


}

  return(


      <div className='h1'>
     
        <div className="h2">
            Shopping
            </div>

    <div className="search">
    <input type="search" placeholder="Search Your Products"/>
      <SearchIcon fontSize="large" /> 

      <label className="icon"></label>
      <span className="fas fa-search"></span>
        </div>

      
        <div className="h3" >
        
        {
            auth ? <Link onClick={logOut} to="/login"> Log-out </Link> :
          <>
          <span> Hello</span>
          <br/>

     <Link to="/login"> Login & Sign</Link> 
          </>
        }
                </div>

                 <div className="n">

             {  auth ? (  <p> welcome<br/>
                             {valueContext.can} </p> ):( <>  </> 
) }
                </div> 

      <div className="h4" ><Link to ="/Cart">
  <Badge badgeContent={getState.length} color="primary">
    <ShoppingCartIcon fontSize='large'  />
    </Badge>
    </Link>
  </div>

      </div>
      
  );

}

export default Header;