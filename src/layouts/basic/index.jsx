import React,{useEffect} from 'react'
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
import saveUserCode from '@UTILS/saveUserCode'
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/core";
console.log("saveUserCode", saveUserCode)

function BasicLayout(props) {
  const [value, setValue] = React.useState('/');
  const [showFlag, setShowFlag] = React.useState(false)
  const {location:{query:{code}},loading} = props
  const {CLIENTID:clientid} = process.env
  console.log("BasicLayout -> loading", loading)
  console.log('code---->',code)
  let userToken = localStorage.getItem('userToken')
  useEffect(()=>{
    // if(code) {
      //   saveUserCode(code)
      //     .then(()=>{
        //       console.log('show!!!!')
        //       setShowFlag(true)
        //     })
        //     .catch(()=>{setShowFlag(false)})
        // }

    console.log('1111111',code,userToken)
    if(!code&&!userToken) {
      setTimeout(()=>{
        window.location.href = `https://mixin-oauth.firesbox.com?client_id=${process.env.CLIENTID}&scope=PROFILE:READ&response_type=code`
      },1000)
      localStorage.removeItem('userToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('userCode');
    }else if(code&&!userToken){
      // console.log('saveUserCode-->', saveUserCode())
      if(code) {
        saveUserCode(code)
          .then(()=>{
            console.log('show!!!!')
            setTimeout(
              ()=>{setShowFlag(true)},500
            )
          })
          .catch(()=>{setShowFlag(false)})
      }
    } else {
      setShowFlag(true)
    }

    // if(userToken) {
    // }
  },[clientid, code, userToken])


  const handleChange = (event, newValue) => {
    console.log('newValue---->',newValue)
    setValue(newValue);
    router.push(newValue)
  };

  useEffect(()=>{
    console.log('location-->',window.location)
    const pathname = window.location.href
    if(pathname.indexOf('newflags')>-1) {
      setValue('/newflags')
    } else if(pathname.indexOf("myflags")>-1) {
      setValue("/myflags")
    } else {
      setValue("/")
    }
  }, [])

  const position = css`
    position: fixed;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
  `
  return (
    <div className="page-container">
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography className="top-font">立志-Setflags</Typography>
        </Toolbar>
      </AppBar>
      {showFlag&&(props.children)}
      <ScaleLoader
        css={position}
        size={15}
        color={"#123abc"}
        loading={loading.global}/>
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

export default connect(({flag,loading})=>({flag,loading}))(BasicLayout)
