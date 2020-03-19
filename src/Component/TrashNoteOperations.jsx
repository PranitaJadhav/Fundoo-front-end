import React, { Component } from 'react';
import { ListItemIcon } from '@material-ui/core';
import UntrashNote from './UntrashNote'
import DeleteNote from './DeleteNote'



class TrashNoteOperations extends Component {
    constructor(props){
        super(props);
        
        // this.createNote=this.createNote.bind(this);

       
    }
    render() {
        return (
            <div>
                <ListItemIcon>  <UntrashNote value={this.props.data}></UntrashNote>
                    </ListItemIcon>
                    
                    <ListItemIcon>  <DeleteNote value={this.props.data}></DeleteNote>
                    </ListItemIcon>
            </div>
        );
    }
}

export default TrashNoteOperations;