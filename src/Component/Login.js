import React, { Component } from 'react';
import registration from './registration.css'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'; 
import { Link } from '@mateterial-ui/'




class Login extends Component {
    render() {
        return (
            <div className = 'container'>
                <form>              
                      <h1>Login</h1>
                      <div className = 'text'>
                      
                      <h4 id="name">EmailID :</h4>
                      <TextField type = "text" placeholder = "EmailID" id = 'ttt'></TextField>
                      </div>
                      <div className = 'text'>
                      <h4 id="emailid">Password :</h4>
                      <TextField type = "text" placeholder = "Password"></TextField>
                      </div>
                      <div>
                      <Button variant="contained" color="primary" 
                        onClick={() => this.props.history.push('/Login')} id = "signup">
                        Login
                        </Button>
                        <Link to="Register" ><input type="submit" name="Register" value="Create new Account" id="registration-button" /></Link><br />
                        <Link to="/forgetpassword">Forgot password?</Link><br />
                    </div>
                </form>
                </div>
        );
    }
}

export default Login;