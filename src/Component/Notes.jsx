import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import NoteOperation from './NoteOperation';
import axios from 'axios';
import Button from '@material-ui/core/Button'; 
import { add, getAll } from './NoteService';
import DashBoardcss from './DashBoardcss.css'






    
class Notes extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            open:false,
            titles:'',
            descriptions:'',
            
        }
        // this.emailid
    }  
    openFile = ()=>{
        this.setState({open:true})
    }
    closeFile = ()=>{
        this.setState({open:false})
    }

    createNote = ()=>
    {
        console.log("this.createNote")
        let newNote = {}
        newNote.title   =   this.state.titles;
        newNote.description =   this.state.descriptions;
        console.log(newNote)

        
        add(newNote).then(Response =>{
            console.log(Response,"Login success")
            alert(Response.data.message)
        })
        .catch((error) =>
        {
            alert(error.response)
            console.log(error.response)

           // alert(Response.data.message)
        })
    
        
    }
    

    render() {
        return (
            <Container>
            <div>
                {this.state.open ?
                <div>
                    
                    <TextField 
                    type = "text" placeholder = "title" id='note'
                    onChange={event=>this.setState({titles:event.target.value})}/>
                    
                 </div>
                 
                 :null}

                    <div>
                    <TextField type = "text" placeholder = "take a note" id='note'
                    onChange={event=>this.setState({descriptions:event.target.value})}
                    onClick={this.openFile} />
                    
                
                    </div>
                    {this.state.open ?
                <div>
                    
                   <NoteOperation function={this.createNote}
                   >
                   
                   
                   </NoteOperation>
                   
                    
                 </div>
                 
                 :null}
                    
                 </div>
            </Container>
        );
    }
}

export default Notes;