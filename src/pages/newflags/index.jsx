import React,{useEffect} from 'react'
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
import {MenuItem} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {Formik, Form, Field} from 'formik';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const NewFlags = (props)=>{
  const {dispatch,assets:{assetsInfo}} = props

  useEffect(()=>{
    if(!assetsInfo) {
      dispatch({
        type:'assets/getAssetsInfo'
      })
    }
  },[assetsInfo, dispatch])

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
              payload: {...values,days:Number(values.days),max_witness:Number(values.max_witness),amount:Number(values.amount),
              times_achieved:Number(values.times_achieved)}
            })
          }}
        initialValues={{
          task:'',
          days:'',
          amount: 0,
          asset_id: 'none',
          max_witness:'',
          times_achieved:1
          // times_achieved:new Date()
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
              label="最多见证者人数"
              name="max_witness"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '最多见证者人数')}
            />
            <Field
              component={TextField}
              type="text"
              label="数量"
              name="amount"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '数量')}
            />
            <Field
              component={TextField}
              type="text"
              name="asset_id"
              label="With Select"
              select
              variant="standard"
              helperText="Please select Range"
              margin="normal"
              className="newflags-item"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {assetsInfo&&assetsInfo.map((option,idx) => (
                <MenuItem key={idx} value={option.asset_id}>
                  {option.symbol}
                </MenuItem>
              ))}
            </Field>
            {/* <Field 
              component={DatePicker} 
              name="times_achieved" 
              label="结束时间" 
              className="newflags-item"
            /> */}
            <Field
              component={TextField}
              type="text"
              label="完成时间天数"
              name="times_achieved"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '完成时间天数')}
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
    </div>
  )
}


export default connect(({flag,assets})=>({flag,assets}))(NewFlags)
