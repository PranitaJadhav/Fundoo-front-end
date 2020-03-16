import React, { Component } from 'react';
import MailIcon from '@material-ui/icons/Mail';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PaletteIcon from '@material-ui/icons/Palette';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Note from './Notes';
import TrashNotes from './TrashNotes'



class NoteOperation extends Component {
    constructor(props){
        super(props);
        // this.createNote=this.createNote.bind(this);

    }
    render() {
        return (
            <div>
                <AddAlertIcon></AddAlertIcon>
                    <PersonAddIcon></PersonAddIcon>
                    <PaletteIcon></PaletteIcon>
                    <ImageIcon></ImageIcon>
                    <ArchiveIcon onClick={this.props.function}>
                    
                    </ArchiveIcon>
                    <MoreVertIcon>
                        
                    </MoreVertIcon>
                    
                    <Button variant="contained"  id='close'
                       onClick={this.props.function}>
                        Close
                        </Button>
                       

                   
                
            </div>
        );
    }
}

export default NoteOperation;