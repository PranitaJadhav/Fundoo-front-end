import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class NoteEdit extends Component {
    render() {
        return (
            <div>
      <Button variant="contained" 
    //   onClick={handleClick}
    >
        Open Popover
      </Button>
      <Popover
        // id={id}
        // open={open}
        // anchorEl={anchorEl}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography >The content of the Popover.</Typography>
      </Popover>
    </div>
        );
    }
}

export default NoteEdit;