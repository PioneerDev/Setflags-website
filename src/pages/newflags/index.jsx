import React,{useEffect} from 'react'
import { connect } from 'dva'
import './index.less'
import {
  TextField
} from 'formik-material-ui';
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
              payload: {...values,days_per_period:Number(values.days_per_period),days:Number(values.days),max_witness:Number(values.max_witness),amount:Number(values.amount),
              times_achieved:Number(values.times_achieved),symbol:assetsInfo&&assetsInfo.filter(ele=>ele.asset_id==values.asset_id)[0].symbol}
            })
          }}
        initialValues={{
          task:'',
          days:'',
          amount: 0,
          asset_id: 'none',
          max_witness:'',
          times_achieved:1,
          days_per_period: 0
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
              label="总天数"
              name="days"
              className="newflags-item"
              validate={(value)=>requirenumberValidate(value, '总天数')}
            />
            <Field
              component={TextField}
              type="text"
              label="周期天数"
              name="days_per_period"
              className="newflags-item"
              validate={(value)=>requirenumberValidate(value, '周期天数')}
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
              label="金额"
              name="amount"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '金额')}
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
              label="完成次数"
              name="times_achieved"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '完成次数')}
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
