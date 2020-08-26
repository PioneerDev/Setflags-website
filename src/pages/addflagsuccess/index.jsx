import React from 'react'
import './index.less'
import {Button} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import router from 'umi/router';

const AddSuccess = (props)=>{

  const {location} = props
  const {query} = location
  const goHome = ()=>{
    router.push({
      pathname:'/flagdetail',
      query:{id:query.id}
    })
  }

  return(
    <div className="addflagsuccess-container">
      <div>
        <CheckCircleIcon style={{ fontSize: 140,color: green[500], marginTop:60,marginBottom:40 }}></CheckCircleIcon>
        <Typography variant="h4" gutterBottom>
          flag创建成功</Typography>
      </div>
      <div>
        <Button variant="contained" size="large" color="primary" style={{marginTop:40}} onClick={()=>goHome()}>
            上传证据
        </Button>
      </div>
    </div>
  )
}

export default AddSuccess