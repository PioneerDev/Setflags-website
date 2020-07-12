import React from 'react'
import './index.less';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'dva';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/core";

function SimpleLayout(props) {
  //TODO: remember to open
  // const {dispatch} = props
  // dispatch({
  //   type: 'flag/getUserCode'
  // })
  const {loading} = props

  const position = css`
  position: fixed;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
 `

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
      <ScaleLoader 
        css={position}
        size={15}
        color={"#123abc"}
        loading={loading.global}/>
    </div>
  );
}

export default connect(({flag,loading})=>({flag,loading}))(SimpleLayout);
