import React from 'react'
import './index.less';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FlagIcon from '@material-ui/icons/Flag';
import ControlPointRoundedIcon from '@material-ui/icons/ControlPointRounded';

function BasicLayout(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="normal">
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">立志-Setflags</Typography>
        </Toolbar>
      </AppBar>
      {props.children}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        className="tabs-container"
        aria-label="icon label tabs example"
      >
        <Tab icon={<FlagIcon />} label="立志列表" />
        <Tab icon={<ControlPointRoundedIcon />} label="新建立志" />
        <Tab icon={<PersonPinIcon />} label="我的" />
      </Tabs>
    </div>
  );
}

export default BasicLayout;
