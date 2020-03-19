import React, { Component } from 'react';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import { unTrashNote } from './NoteService';



class UntrashNote extends Component {
    constructor(props){
        super(props);
      
        // this.emailid
    } 
    // componentDidMount(){
    //     this.getNotes()
    // }

    unTrashNotes = (id)=>
    {console.log('get untrashed',id)
        let ID= {}
        ID.nid=id

        console.log('id is',ID)
        unTrashNote(ID).then(Response =>{
            
            console.log(Response,"untrashed")
           // alert(Response.data.message)
        })
        .catch((error) =>
        {
            //alert(error.response)
            console.log(error.response)

           // alert(Response.data.message)
        })
    
        
    } 
    render() {
        return (
            <div>
          <RestoreFromTrashIcon className="personaddicon" onClick={()=>this.unTrashNotes(this.props.value)}></RestoreFromTrashIcon>

            </div>
        );
    }
}

export default UntrashNote;