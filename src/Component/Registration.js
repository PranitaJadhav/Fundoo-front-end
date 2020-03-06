import React, { Component } from 'react';
import Button from '@material-ui/core/Button'; 
import { TextField } from '@material-ui/core';
import registration from './registration.css'
import axios from 'axios';


class Registration extends Component {

    constructor(props){
        super(props);
        
        this.state = {
    name:'',
    emailid:'',
    mobileNo:'',
    password:'',
    confirmPassword:''

            
        }
        // this.emailid
    }
    
    
    loginhandle = ()=>
    {
        axios.post('http://localhost:8090/user/add',
        {
            name:this.state.name,
            emailid:this.state.emailid,
            mobileNo:this.state.mobileNo,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword

    
    })

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
            alert(error.response.data.message)
            
        })
    
        
    }
    render() {
        return (
            <div className = 'container'>
                <form>              
                      <h1>Registration</h1>
                      <div className = 'text'>
                      {/* <label  id = "label">Name </label> */}
                      <h4 id="name">Name :</h4>
                      <TextField type = "text" placeholder = "Name" 
                        onChange={event=>this.setState({name:event.target.value})}
                      id = 'ttt'></TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="emailid">EmailID :</h4>
                      <TextField type = "text" placeholder = "EmailID" 
                       onChange={event=>this.setState({emailid:event.target.value})} >
                      </TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="Mobile">Mobile number:</h4>                   
                       <TextField type = "text" placeholder = "Mobile number" 
                       onChange={event=>this.setState({mobileNo:event.target.value})}>
                       </TextField>
                      </div >
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
                      <div>
                      <Button variant="contained" color="primary" 
                        // onClick={() => this.props.history.push('/Login')} id = "signup"
                        onClick={this.loginhandle}>
                        
                        Signup
                        </Button>
                        </div>

                </form>
                
            </div>
        );
    }
}

export default Registration;