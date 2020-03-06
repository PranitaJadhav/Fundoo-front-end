import React, { Component } from 'react';
import registration from './registration.css'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 
//{ Link } from '@mateterial-ui/'
import axios from 'axios';





class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            emailid : '',
            password:''
        }
        // this.emailid
    }  
    // componentDidMount(){


    //     axios.post('localhost:8080/user/login')

    //     .then(response =>{
    //         console.log(response)
    //         this.setState({post:response.data})
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // }
    loginhandle = ()=>
    {
        axios.post('http://localhost:8090/user/login',{emailid:this.state.emailid,password:this.state.password})

        // let user = {};
        // user.emailid = this.state.emailid;
        // user.emailid = this.state.Password;
        // login(LoginDto)
        .then(Response =>{
            console.log(Response,"Login success")
            //alert(Response.data.message)
        })
        .catch((error) =>
        {
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
                      <Button variant="contained" color="primary" 
                       onClick={this.loginhandle}>
                        Login
                        </Button>
                        <Button variant="contained" color="primary" 
                        onClick={() => this.props.history.push('/Registration')} id = "signup">
                        Signup
                        </Button>
                    </div>
                </form>
                </div>
        );
    }
}

export default Login;
