import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Menu'
// import MenuIcon from '@material-ui/icons/Menu';
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






// import MenuIcon from '@material-ui/icons/Menu';
const [open, setOpen] = React.useState(false);
class DashBoard extends Component {
  
 handleDrawerOpen = () => {
    setOpen(true);
  };

   handleDrawerClose = () => {
    setOpen(false);
  };
    
    render() {
        
            return (
                <div >
                  <AppBar position="static">
                  <Toolbar>
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer">
                   <MenuIcon />
                   </IconButton>
                     <Typography variant="h6" noWrap>
                           Material-UI
                    </Typography>
                    <div>

                      <div>
                      <SearchIcon placeholder="Search…">

                      </SearchIcon>

                      </div>
                      <InputBase></InputBase>
                    </div>
                       <div></div>
                       <div>
                       <IconButton  color="inherit">
                        
                       <MailIcon />
                      
                        </IconButton>
                        <IconButton  color="inherit">
                        {/* <Badge badgeContent={4} color="secondary"> */}
                       <MailIcon />
                       {/* </Badge> */}
                        </IconButton>
                        <IconButton  color="inherit">
                       {/* <Badge badgeContent={17} color="secondary"> */}
                        <NotificationsIcon />
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
                            <AccountCircle />
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
                  <Drawer  variant="persistent" anchor="left">
                    <div>
                  <IconButton>
                      <ChevronLeftIcon />  <ChevronRightIcon />
                   </IconButton>
                   </div>
                   <Divider></Divider>
                   <List>

                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                              <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                       ))}
                   </List>
                  </Drawer>
               
                </div>
              );
            }
        
    }


export default DashBoard;