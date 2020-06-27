import React from 'react'
import './index.less'
import {Button} from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import router from 'umi/router';

const AddSuccess = (props)=>{
  
  const goHome = ()=>{
    router.push('/')
  }

  return(
    <div className="addflagsuccess-container">
      <div>
        <ErrorIcon style={{ fontSize: 140,color: red[500], marginTop:60,marginBottom:40 }}></ErrorIcon>
        <Typography variant="h4" gutterBottom>
          flag创建失败</Typography>
      </div>
      <div>
        <Button variant="contained" size="large" color="primary" style={{marginTop:40}} onClick={()=>goHome()}>
            回到首页
        </Button>
      </div>
    </div>
  )
}

export default AddSuccess