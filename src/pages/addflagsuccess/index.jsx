import React from 'react'
import './index.less'
import {Button} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const AddSuccess = (props)=>{
  return(
    <div className="addflagsuccess-container">
      <div>
        <CheckCircleIcon></CheckCircleIcon>
        <div>flag创建成功！</div>
      </div>
      <div>
        <Button color="primary">
            回到首页
        </Button>
      </div>
    </div>
  )
}