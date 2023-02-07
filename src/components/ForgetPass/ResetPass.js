import React, { Component } from 'react'
import axios from 'axios'
import  "./ForgetPass.css"
export class ResetPass extends Component {
constructor(){
  super()
    this.state = {
        email: "",
        showError: false,
        messageFromServer: '',
    };
}
handleChange =name =>event  =>{
  this.setState({
    [name]:event.target.value,
  });
}
 sendEmail = e => {
  e.preventDefault();
  if(this.state.email===''){
    this.setState({
      showError: false,
      messageFromServer: '',
    });
  } else {
    axios.post('http://localhost:8000/forget-pass',{
       email : this.state.email,
    }).then(response=>{
      console.log(response.data);
      if(response.data==='email not registered'){
        this.setState({showError:true,messageFromServer:'',
      })
      }else if(response.data === 'recovery email Sent'){
        this.setState({showError:false, messageFromServer:'recovery  Mail Sent '});
      }
    }).catch (error =>{
      console.log(error.data);
    });
  }
 }

  render() {
    const { email ,messageFromServer,showNullError  
    }=this.state
    return (
      <div className="login">
            <h1 className="my-4">Forget Password</h1>
            <form   onSubmit={this.sendEmail} >
            <input type="text" name="email" onChange={this.handleChange('email')} value={email} placeholder="Enter your Email"></input>
            <div className="button" onClick={this.sendEmail} >Send Email</div>
            </form> {showNullError && (
              <div><p>Email Adress Cannot Be Null</p></div>
            )
            } {
              messageFromServer === 'recovery  email Sent ' && (<div><p> Password Email Sent SuccessFully</p></div>)
            } 
              
        </div>
    )
  }
}

export default ResetPass;