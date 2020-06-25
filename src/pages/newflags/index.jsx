import React from 'react'
import { connect } from 'dva'
import './index.less'
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from 'formik-material-ui';
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';
import Button from '@material-ui/core/Button'
import { useForm, Controller } from "react-hook-form"
import {Formik, Form, Field} from 'formik';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const NewFlags = (props)=>{
    const {dispatch} = props
  // const { handleSubmit, control, watch } = useForm()
  // const dateReceived = watch("expiryAt");
  // const onSubmit = (data, e) => {
  //   console.log('data----->',data)
  //   console.log('e------>',e)
  //   dispatch({
  //     type: 'flag/newFlag',
  //     payload: data
  //   })
  // }
  const requireValidate = (value, name) =>{
    let error
    if(!value) {
      error=`请输入${name}`
    }
    return error
  }

  const requirenumberValidate = (value, name) =>{
    let error
    if(!value) {
      error=`请输入${name}`
    } else if(!/^\+?[1-9][0-9]*$/.test(value)) {
      error=`请输入正整数`
    }
    return error
  }

  const requirefloatnumberValidate = (value, name) =>{
    let error;
    if(!value) {
      error=`请输入${name}`
    } else if(!/^\d+(\.\d+)?$/.test(value)) {
      error='请输入数字'
    }
    return error
  }

  return(
    <div>
      <Formik
        onSubmit={(values, {setSubmitting}) => {
            dispatch({
              type: 'flag/newFlag',
              payload: values
            })
          }}
        initialValues={{
          task:'',
          days:'',
          maxwitness:'',
          date:new Date()
        }}
        render={({submitForm, isSubmitting, values, setFieldValue}) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form className="newflags-container">
            <div className="newflags-title">新建立志</div>
            <Field
              component={TextField}
              type="text"
              label="任务名"
              name="task"
              className="newflags-item"
              validate={(value)=>requireValidate(value, '任务名')}
            />
            <Field
              component={TextField}
              type="text"
              label="天数"
              name="days"
              className="newflags-item"
              validate={(value)=>requirenumberValidate(value, '天数')}
            />
            <Field
              component={TextField}
              type="text"
              label="最大奖励"
              name="maxwitness"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '最大奖励')}
            />
            <Field 
              component={DatePicker} 
              name="date" 
              label="结束时间" 
              className="newflags-item"
            />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              className="newflags-submit"
              >
              点击新建
            </Button>
            </Form>
          </MuiPickersUtilsProvider>
        )}
        />
      {/* <form action="" className="newflags-container" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="newflags-title">新建立志</div>
        <Controller 
          as={<TextField id="task-basic" label="任务" variant="filled" className="newflags-item"></TextField>}
          name="task"
          control={control}
          defaultValue=''
        />

       <Controller 
          as={
            <TextField id="days-basic" label="天数" variant="filled" className="newflags-item"></TextField>
          }
          name="days"
          control={control}
          defaultValue=''
       />

       <Controller 
          as={
            <TextField id="maxWitness-basic" label="最大奖励" variant="filled" className="newflags-item"></TextField>
          }
          name="max_witness"
          control={control}
          defaultValue=''
       />

        <Controller 
          as={
            <ReactDatePicker
            dateFormat="d MMM yyyy"
            minDate={new Date()}
            selected={
              dateReceived?.value ? new Date(dateReceived.value) : null
            }
            showTimeSelect={false}
            todayButton="Today"
            dropdownMode="select"
            isClearable
            placeholderText="点击选择时间"
            shouldCloseOnSelect
          />
          }
          control={control}
          name="times_achieved"
          defaultValue=''
        />

        <Button variant="contained" color="primary" className="newflags-submit" size="large" type="submit">
           点击新建
        </Button>
      </form> */}
    </div>
  )
}


export default connect(({flag})=>({flag}))(NewFlags)
