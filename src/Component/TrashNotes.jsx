import React, { Component } from 'react';
import { add, getAll } from './NoteService';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import NoteOperation from './NoteOperation';
import DashBoardcss from './DashBoardcss.css'
import { trashNote } from './NoteService';
import ArchiveIcon from '@material-ui/icons/Archive';


class TrashNotes extends Component {
    constructor(props){
        super(props);
      
        // this.emailid
    } 
    // componentDidMount(){
    //     this.getNotes()
    // }

    getTrash = (id)=>
    {console.log('get trash',id)
        let ID= {}
        ID.nid=id

        console.log('id is',ID)
        trashNote(ID).then(Response =>{
            
            console.log(Response,"Done")
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
                <ArchiveIcon onClick={()=>this.getTrash(this.props.value)}></ArchiveIcon>
                 {/* <button onClick={()=>this.getTrash(this.props.value)}>
                    archive
                    </button> */}
            </div>
           
        );
    }
}


export default TrashNotes;