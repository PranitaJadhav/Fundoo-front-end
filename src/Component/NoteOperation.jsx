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
import { trashNote } from './NoteService';
import ArchiveNotes from './ArchiveNotes'
import PinUnpin from './PinUnpin'
import NoteOperationcss from './NoteOperationcss.css'
import registration from './registration.css'
import { ListItemIcon } from '@material-ui/core';


const Tooltip = () => <div>tooltip</div>



class NoteOperation extends Component {
    constructor(props){
        super(props);
        this.state = {
            hover:false
        }
        // this.createNote=this.createNote.bind(this);

       
    }
    mouseOver= () =>{
        this.setState({hover:true})
      };
      mouseLeave= () =>{
        this.setState({hover:false})
      };
    
      
    render() {
        return (
            <div >
                
              <ListItemIcon> { this.setState.hover ? <Tooltip/>:null} <AddAlertIcon 
                                     onMouseOver={this.mouseOver}
                                    onMouseOut={this.mouseLeave}>

          </AddAlertIcon>
              </ListItemIcon>   

            
              
                   <ListItemIcon> <PersonAddIcon className="personaddicon"></PersonAddIcon>
                   </ListItemIcon>
                    
                    <ListItemIcon>  <PinUnpin value={this.props.data}></PinUnpin>
                    </ListItemIcon>

                    <ListItemIcon>  <ArchiveNotes value={this.props.data}></ArchiveNotes>
                    </ListItemIcon>
                    <ListItemIcon>
                    <TrashNotes value={this.props.data}> </TrashNotes>
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

export default NoteOperation;