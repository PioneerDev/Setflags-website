import React from 'react'
import { connect } from 'dva'
import './index.less'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm, Controller } from "react-hook-form"

const NewFlags = (props)=>{
  const { handleSubmit, control } = useForm()
  const onSubmit = (data, e) => {
    console.log('data----->',data)
    console.log('e------>',e)
  }
  return(
    <div>
      <form action="" className="newflags-container" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="newflags-title">新建立志</div>
        <Controller 
          as={<TextField id="task-basic" label="任务" variant="filled" className="newflags-item"></TextField>}
          control={control}
          defaultValue=''
        />

       <Controller 
          as={
            <TextField id="days-basic" label="天数" variant="filled" className="newflags-item"></TextField>
          }
          control={control}
          defaultValue=''
       />

       <Controller 
          as={
            <TextField id="maxWitness-basic" label="最大奖励" variant="filled" className="newflags-item"></TextField>
          }
          control={control}
          defaultValue=''
       />
        <Controller 
          as={
            <TextField id="maxWitness-basic" label="完成时间" variant="filled" className="newflags-item"></TextField>
          }
          control={control}
        />

        <Button variant="contained" color="primary" className="newflags-submit" size="large" type="submit">
           点击新建
        </Button>
      </form>
    </div>
  )
}

export default connect(({flag})=>({flag}))(NewFlags)