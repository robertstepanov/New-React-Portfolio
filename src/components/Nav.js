import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

// const useStyles = makeStyles({
//     toolbar: {

//     },
// })

export default function Nav() {
  // const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className='toolbar'>
        <div>
          <Typography>Robert Stepanov Portfolio</Typography>
        </div>
        <div>
          <Button href='/'>Home</Button>
          <Button href='/about'>About</Button>
          <Button href='/work'>My Work</Button>
          <Button href='/contact'>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
