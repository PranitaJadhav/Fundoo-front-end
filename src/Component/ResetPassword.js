import React, { Component } from 'react';
import Button from '@material-ui/core/Button'; 
import { TextField } from '@material-ui/core';
import registration from './registration.css'
import axios from 'axios';



class ResetPassword extends Component {
    constructor(props){
        super(props);
        
        this.state = {
   
    emailid:'',
   
    password:'',
    confirmPassword:''

            
        }
        // this.emailid
    }
    loginhandle = ()=>
    {
        axios.post('http://localhost:8090/user/reset',
        {
            
            emailid:this.state.emailid,
            
            password:this.state.password,
            confirmPassword:this.state.confirmPassword

    
    })

        
        .then(Response =>{
            console.log(Response,"Login success")
            this.props.history.push('/Login')
            //alert(Response.data.message)
        })
        .catch((error) =>
        {
            alert(error.response.data.message)
            
        })
    
        
    }
    render() {
        return (
            <div>
               <form className = 'container'>              
                      {/* <h1>Login</h1> */}
                      <div className = 'text'>
                      
                     
                        <div className = 'text'>
                      <h4 id="emailid">EmailID :</h4>
                      <TextField type = "text" placeholder = "EmailID" 
                       onChange={event=>this.setState({emailid:event.target.value})} >
                      </TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="password">Password :</h4>
                      <TextField type = "text" placeholder = "Password" 
                      onChange={event=>this.setState({password:event.target.value})}>
                      </TextField>
                      </div>


                      <div className = 'text'>
                      <h4 id="confirmpassword">Confirm Password :</h4>
                      <TextField type = "text" placeholder = "Password"
                    //    value = {this.state.confirmpassword}
                      onChange={event=>this.setState({confirmPassword:event.target.value})}>
                      </TextField>
                      </div>
                      <div></div>
                        <Button variant="contained" color="primary" 
                        // onClick={() => this.props.history.push('/Registartion')} id = "signup"
                        onClick={this.loginhandle}>
                        Change Password
                        </Button>
                      </div>
                      </form> 
            </div>
        );
    }
}

export default ResetPassword;