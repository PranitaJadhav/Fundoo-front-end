import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import registration from './registration.css';
import axios from 'axios';
import Button from '@material-ui/core/Button'; 





class ForgetPassword extends Component {
    
        constructor(props){
            super(props);
            
            this.state = {
                emailid : '',
                
            }
            // this.emailid
        } 
        loginhandle = ()=>
        {
            axios.post('http://localhost:8090/user/forget',{emailid:this.state.emailid})
    
           
            .then(Response =>{
                console.log(Response,"Login success")
                //alert(Response.data.message)
            })
            .catch((error) =>
            {
               alert(Response.data.message)
            })
        
            
        } 
    
    render() {
        return (
            <div>
                 <form className = 'container'>              
                      {/* <h1>Login</h1> */}
                      <div className = 'text'>
                      
                      <h4 id="name">EmailID :</h4>
                      <TextField type = "text" placeholder = "EmailID" id = 'ttt'
                        onChange={event=>this.setState({emailid:event.target.value})} >

                        </TextField>
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

export default ForgetPassword;