import React, { Component } from 'react';
import Button from '@material-ui/core/Button'; 
import { TextField } from '@material-ui/core';
import registration from './registration.css'

class Registration extends Component {
    render() {
        return (
            <div className = 'container'>
                <form>              
                      <h1>Registration</h1>
                      <div className = 'text'>
                      {/* <label  id = "label">Name </label> */}
                      <h4 id="name">Name :</h4>
                      <TextField type = "text" placeholder = "Name" id = 'ttt'></TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="emailid">EmailID :</h4>
                      <TextField type = "text" placeholder = "EmailID"></TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="Mobile">Mobile number:</h4>                   
                       <TextField type = "text" placeholder = "Mobile number"></TextField>
                      </div >
                      <div className = 'text'>
                      <h4 id="password">Password :</h4>
                      <TextField type = "text" placeholder = "Password"></TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="confirmpassword">Confirm Password :</h4>
                      <TextField type = "text" placeholder = "Password"></TextField>
                      </div>
                      <div>
                      <Button variant="contained" color="primary" 
                        onClick={() => this.props.history.push('/Login')} id = "signup">
                        Signup
                        </Button>
                        </div>

                </form>
                
            </div>
        );
    }
}

export default Registration;