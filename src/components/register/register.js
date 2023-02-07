import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"



const Register = () => {

    const Navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        file:"",
        type:"1"
    })

    const [file, setFile]= useState("");

    const handleChange = (e) => {

        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }
    
    function handleFile(e) 
    {
    e.preventDefault();
    setFile(e.target.files[0]);

    setUser({...user,["file"]:e.target.files[0]});
    console.log(file);
    }

    const register = () => {
        const { name, email, password, reEnterPassword, file } = user

        
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
        if( name && email && password && (password === reEnterPassword)){
            
            axios.post("http://localhost:4000/register", user,config)
            .then( res => {
                alert(res.data.message)
                Navigate("/login")
            })
        } else {
            alert("invlid input")
        }
        
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <input  type="file" name="file" onChange={handleFile}/>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => Navigate("/login")}>Login</div>
        </div>
    )
}

export default Register