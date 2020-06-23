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
import router from 'umi/router';
import { connect } from 'dva'

function BasicLayout(props) {
  const [value, setValue] = React.useState('/');
  console.log('layout props--->', props)
  //TODO: remember to open
  // const {dispatch} = props
  // dispatch({
  //   type: 'flag/getUserCode'
  // })
  const handleChange = (event, newValue) => {
    console.log('newValue---->',newValue)
    setValue(newValue);
    router.push(newValue)
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
        <Tab icon={<FlagIcon />} label="立志列表" value="/" />
        <Tab icon={<ControlPointRoundedIcon />} label="新建立志" value="/newflags" />
        <Tab icon={<PersonPinIcon />} label="我的" value="/myflags" />
      </Tabs>
    </div>
  );
}

export default connect(({flag})=>({flag}))(BasicLayout)
