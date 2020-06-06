import React from 'react'
import { connect } from 'dva'
import './index.less'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const NewFlags = (props)=>{
  const onSubmit = (data, e) => {
    console.log('data----->',data)
    console.log('e------>',e)
  }
  return(
    <div>
      <form action="" className="newflags-container" noValidate autoComplete="off" onSubmit={onSubmit}>
        <div className="newflags-title">新建立志</div>
        <TextField id="task-basic" label="任务" variant="filled" className="newflags-item"></TextField>
        <TextField id="days-basic" label="天数" variant="filled" className="newflags-item"></TextField>
        <TextField id="maxWitness-basic" label="最大奖励" variant="filled" className="newflags-item"></TextField>
        <TextField id="maxWitness-basic" label="完成时间" variant="filled" className="newflags-item"></TextField>
        <Button variant="contained" color="primary" className="newflags-submit" size="large" type="submit">
           点击新建
        </Button>
      </form>
    </div>
  )
}

export default connect(({flag})=>({flag}))(NewFlags)