import React from 'react'
import './index.less';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function SimpleLayout(props) {
  return (
    //TODO: back
    <div className="normal">
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">立志-Setflags</Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}

export default SimpleLayout;
