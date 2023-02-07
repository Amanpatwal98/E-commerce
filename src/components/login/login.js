import axios from "axios";
import React, {useEffect, useState,useContext} from "react"
import "./login.css"
import {NavLink, useNavigate } from "react-router-dom";
import NoteContext from "../NoteContext";

const Login = () => {

    
    const valueContext=useContext(NoteContext);

    const navigate = useNavigate()
    const [ user, setUser] = useState({


        email:"",
        password:"",
        
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,

            [name]: value

        })
        // localStorage.setItem('name',JSON.stringify(user.email));
        // console.log(user.email);


    }


    const login = () => {
     let  result= axios.post("http://localhost:4000/login", user)
        .then(res => {
            alert(res.data.message);
            valueContext.setCan(res.data.user.name)   

        console.log(res.data.user)
            if(res.data.user.type===0)
            {
                navigate("/admin")
            }

            else if(res.data.user.type===1)
            {
                alert("ok")
                navigate("/")
            }
            else
            alert("invalid ")

        localStorage.setItem("user",JSON.stringify(res.data.user));
        

        valueContext.setIsLogin(true)   
        });
      

    }

    return (
        <div className="login">
            <h1 className="my-4">Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Email"></input>
            
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter Password" ></input>
            <div className="button" onClick={login}>Login</div>
             <p style={{color:"black",fontWeight:"bold"}}>Forgot Password? <NavLink to="forget-pass">Click Here</NavLink> </p>
             <p style={{color:"black",fontWeight:"bold"}}>Register<NavLink to="/register">Click Here</NavLink> </p>
        </div>
    )
}

export default Login
