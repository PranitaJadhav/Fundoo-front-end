import React, { Component } from 'react';
import {getTrash  } from './NoteService';
import Card from '@material-ui/core/Card';
import NoteOperation from './NoteOperation';
import TrashNoteOperations from './TrashNoteOperations';




class GetAllTrashNotes extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            
            store:[]
        }
        // this.emailid
    } 
    componentDidMount(){
        this.getTrashNotes()
    }
    getTrashNotes = ()=>
    {
        

        console.log(Response)
        getTrash().then(Response =>{
            this.setState({
                store:Response.data.result
            })
            console.log(Response,"Done")
            //alert(Response.data.message)
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
            <div style={{display:'flex',flexDirection:'row' ,flexWrap:'Wrap'}} className='getNotes'>
                {this.state.store.map(o =>(

                    <Card id='getNotesCards'>
                        <div color='red'>
                            {o.title}
                        </div>
                        <div>
                            {o.description}

                        </div>
                       
                        <TrashNoteOperations data={o.nid}/>

                        {/* <div><NoteOperation></NoteOperation></div> */}
                    </Card>
                           
                    
                ))
    }
               
                
                
                </div>
                
        );
    }
}

export default GetAllTrashNotes;