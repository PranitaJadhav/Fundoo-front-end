import React, { Component } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import { isArchive } from './NoteService';
import NoteOperationcss from './NoteOperationcss.css'




class ArchiveNotes extends Component {
    
        constructor(props){
            super(props);
          
            // this.emailid
        } 
        // componentDidMount(){
        //     this.getNotes()
        // }
    
        getArchive = (id)=>
        {console.log('get trash',id)
            let ID= {}
            ID.nid=id
    
            console.log('id is',ID)
            isArchive(ID).then(Response =>{
                
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
             <ImageIcon className="personaddicon" onClick={()=>this.getArchive(this.props.value)}></ImageIcon>

            </div>
        );
    }
}

export default ArchiveNotes;