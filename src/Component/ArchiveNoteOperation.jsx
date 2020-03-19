import React, { Component } from 'react';
import NoteOperationcss from './NoteOperationcss.css'
import registration from './registration.css'
import { ListItemIcon } from '@material-ui/core';
import TrashNotes from './TrashNotes'
import { trashNote } from './NoteService';
import ArchiveNotes from './ArchiveNotes'
import PinUnpin from './PinUnpin'
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Unarchive from './Unarchive'



class ArchiveNoteOperation extends Component {
    constructor(props){
        super(props);
        
        // this.createNote=this.createNote.bind(this);

       
    }
    render() {
        return (
            <div>
                 <ListItemIcon> 
                      <AddAlertIcon>

                     </AddAlertIcon>
              </ListItemIcon>   

            
              
                   <ListItemIcon> 
                       <PersonAddIcon className="personaddicon">

                       </PersonAddIcon>
                   </ListItemIcon>
                    
                    <ListItemIcon> 
                         <PinUnpin value={this.props.data}>

                         </PinUnpin>
                    </ListItemIcon>

                    <ListItemIcon> 
                         <Unarchive value={this.props.data}>

                         </Unarchive>
                    </ListItemIcon>

                    <ListItemIcon>
                    <TrashNotes value={this.props.data}>
                         </TrashNotes>

                    </ListItemIcon>

                    <ListItemIcon>
                    <MoreVertIcon>
                        
                    </MoreVertIcon>
                    </ListItemIcon>
                    
                    <Button variant="contained"  id='close'
                       onClick={this.props.function}>
                        Close
                        </Button>
                       

            </div>
        );
    }
}

export default ArchiveNoteOperation;