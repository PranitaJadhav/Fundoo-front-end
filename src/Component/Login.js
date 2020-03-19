import React, { Component } from 'react';
import registration from './registration.css'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 
//{ Link } from '@mateterial-ui/'
import axios from 'axios';
import { Link } from 'react-router-dom';






class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            emailid : '',
            password:''
        }
        // this.emailid
    }  
    
    
    loginhandle = ()=>
    { 
    
        axios.post('http://localhost:8090/user/login',{emailid:this.state.emailid,password:this.state.password})           .then(Response => {
            console.log(Response)
            console.log("Login success")

            sessionStorage.setItem("token",Response.data.result)
            // localStorage.setItem("userToken",Response.result.data)

            alert(Response.data.message)
        })
        .catch((error) =>
        {
            console.log(error);
            
            // alert(Response.data.message)
        })
    
        
    }

    render() {
        return (
            <div className = 'container'>
                <form>              
                      <h1>Login</h1>
                      <div className = 'text'>
                      
                      <h4 id="name">EmailID :</h4>
                      <TextField type = "text" placeholder = "EmailID" id = 'ttt'
                        onChange={event=>this.setState({emailid:event.target.value})} >

                        </TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="emailid">Password :</h4>
                      <TextField type = "text" placeholder = "Password"
                        onChange={event=>this.setState({password:event.target.value})}>
                     </TextField>
                      </div>
                      <div>
                      <div>
                        <Link to={'/ForgetPassword'} >ForgetPassword</Link>
                    </div>
                      <Button variant="contained" color="primary" 
                       onClick={this.loginhandle} id='login'
                       >
                        Login
                        </Button>
                        <Button variant="contained" color="primary" 
                        onClick={() => this.props.history.push('/Registartion')} id = "signup">
                        Signup
                        </Button>
                    </div>
                    


                </form>
                </div>
        );
    }
}

export default Login;
