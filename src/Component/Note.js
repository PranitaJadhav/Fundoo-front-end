import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';






class Note extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            open:false,
            title:'',
            description:''
        }
        // this.emailid
    }  
    openFile = ()=>{
        this.setState({open:true})
    }
    render() {
        return (
            <Container>
            <div className = 'container'>
                {this.state.open?
               
                    
                        <div>
                            
                    <TextField 
                    type = "text" placeholder = "Description"
                    onChange={event=>this.setState({title:event.target.value})}/>
            </div>
                    <div>
                    <TextField type = "text" placeholder = "Description"
                    onChange={event=>this.setState({description:event.target.value})} />
                    </div>
                    
                    <div>


                    </div>


                    {/* </CardContent> */}
               
                
            </div>
            </Container>
        );
    }
}

export default Note;