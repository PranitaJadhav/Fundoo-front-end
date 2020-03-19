import React, { Component } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteTrash } from './NoteService';




class DeleteNote extends Component {
    constructor(props){
        super(props);
      
        // this.emailid
    } 
    // componentDidMount(){
    //     this.getNotes()
    // }

    deleteTrashNote = (id)=>
    {console.log('get DeleteNote',id)
        let ID= {}
        ID.nid=id

        console.log('id is',ID)
        deleteTrash(ID).then(Response =>{
            
            console.log(Response,"Unarchived")
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
            <DeleteForeverIcon className="personaddicon" onClick={()=>this.deleteTrashNote(this.props.value)}></DeleteForeverIcon>

            </div>
        );
    }
}

export default DeleteNote;