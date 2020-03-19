import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import MenuIcon from '@material-ui/core/Menu'
 import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//  import SearchIcon from '@material-ui/icon/SearchIcon';
 import SearchIcon from '@material-ui/icons/Search';
 import MailIcon from '@material-ui/icons/Mail';
 import NotificationsIcon from '@material-ui/icons/Notifications';
 import AccountCircle from '@material-ui/icons/AccountCircle';
 import MoreIcon from '@material-ui/icons/MoreVert';
 import Drawer from '@material-ui/core/Drawer';
// import { Drawer, Divider } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemText  from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/List';
import InboxIcon from '@material-ui/core/ListItem';
import Notes from './Notes';
import DashBoardcss from './DashBoardcss.css'
import GetAllNotes from './GetAllNotes';
import GetAllTrashNotes from './GetAllTrashNotes';
import {getTrash  } from './NoteService';
import {getAll  } from './NoteService';
import {getArchivesNotes} from './NoteService';
import { red } from '@material-ui/core/colors';

class DashBoard extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        open:false,
        store:[],
        // store1:[]
   }
    // this.emailid
}  
    handleDrawerOpen= () =>{
      this.setState({open:true})
    };
    handleDrawerClose= () =>{
      this.setState({open:false})
    };
    // componentDidMount(){
    //   this.getNotes()
    // }
  //   getNotes = ()=>
  //   {
  //       getAll().then(Response =>{
  //             this.setState({
  //               store:Response.data.result
  //             })
  //             console.log(Response,"Done")
  //             //alert(Response.data.message)
  //         })
  //         .catch((error) =>
  //         {
  //             alert(error.response)
  //             console.log(error.response)

  //           // alert(Response.data.message)
  //         })
  // } 
          
  //   getTrashNotes = ()=>
  //   {
  //        console.log(Response)
  //       getTrash().then(Response =>{
  //           this.setState({
  //               store:Response.data.result
  //           })
  //           console.log(Response,"Done")
  //           //alert(Response.data.message)
  //       })
  //       .catch((error) =>
  //       {
  //           alert(error.response)
  //           console.log(error.response)

  //          // alert(Response.data.message)
  //       })
  //    } 
  //   getAllArchiveNotes = ()=>
  //   {
  //       getArchivesNotes().then(Response =>{
  //             this.setState({
  //               store:Response.data.result
  //             })
  //             console.log(Response,"Done")
  //             //alert(Response.data.message)
  //         })
  //         .catch((error) =>
  //         {
  //             alert(error.response)
  //             console.log(error.response)

  //           // alert(Response.data.message)
  //         })
  //  } 
          
    render() {
      const{open} = this.state
        
            return (
                <div >
                  <AppBar position="static">
                  <Toolbar>
                  <IconButton id='logo'
                      edge="start"
                      color="inherit"
                      // aria-label="open drawer"
                      arial-label="menu"
                      onClick={this.handleDrawerOpen}
                      >
                   <MenuIcon />
                   </IconButton >
                     <Typography variant="h6" noWrap>
                           KeepNotes
                    </Typography>


                    {/* <div> */}
                       <div>
                            <SearchIcon placeholder="Search.." id='searchLogo'>
                                      </SearchIcon>
                          </div>
                          <div>                      
                            <InputBase id='searchBar'></InputBase>
                            </div>

                    {/* </div> */}
                    
                       {/* <div></div> */}
                       <div>
                       <IconButton  color="inherit">
                        
                       {/* <MailIcon /> */}
                      
                        {/* </IconButton>
                        <IconButton  color="inherit"> */}
                        {/* <Badge badgeContent={4} color="secondary"> */}
                       {/* <MailIcon /> */}
                       {/* </Badge> */}
                        {/* </IconButton>
                        <IconButton  color="inherit"> */}
                       {/* <Badge badgeContent={17} color="secondary"> */}
                        {/* <NotificationsIcon /> */}
                       {/* </Badge> */}
                          </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={menuId}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                          >
                            <AccountCircle id='personLogo' />
                          </IconButton>                       
                      </div>
                      <div>
                      <IconButton
                            aria-label="show more"
                            // aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            // onClick={handleMobileMenuOpen}
                            color="inherit"
                          >
                            {/* <MoreIcon /> */}
                          </IconButton>
                      </div>
                  </Toolbar>
                  </AppBar>
                  <div style={
                    {
                      backgroundColor:'red'
                    }
                  }>                 
                     <Drawer  variant="persistent" anchor="left" 
                  open={open}style={{color:"red"}}>

                    <div>
                  <IconButton onClick={this.handleDrawerClose}>
                      <ChevronLeftIcon />  <ChevronRightIcon />
                   </IconButton>
                   </div>
                   <Divider></Divider>
                   <List>

                      <div id='noteicon'>
                          <div >
                          <ListItemIcon>
                            <MailIcon />
                            </ListItemIcon>
                          </div>

                            <div>
                            <ListItemText >Note</ListItemText>
                            </div>
                      </div>

                      <div >
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText>Reminders</ListItemText>
                      </div>
                      </List>
                      <Divider />
                      <List>
                            <div >
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText >Trash</ListItemText>
                            </div>
                            <div  >
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText>Archives</ListItemText>
                            </div>
                      </List>
                      <Divider />
                
                  </Drawer>
                  </div>

                  <div>
                      <Notes></Notes>
                   </div>
                   <div>
                     <GetAllNotes data={this.state.store}></GetAllNotes>
                      </div>
                   </div>
              );
            }
        }
export default DashBoard;