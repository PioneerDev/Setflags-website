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
              payload: {...values,
                days_per_period:Number(values.days_per_period),
                max_witness:Number(values.max_witness),
                amount:Number(values.amount),
                total_period:Number(values.total_period),
                symbol:assetsInfo&&assetsInfo.filter(ele=>ele.asset_id==values.asset_id)[0].symbol}
            })
          }}
        initialValues={{
          task:'',
          amount: 0,
          asset_id: 'none',
          max_witness:'',
          total_period:1,
          days_per_period: 0,
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
              label="币种"
              select
              variant="standard"
              helperText="请选择币种"
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
            <Field
              component={TextField}
              type="text"
              label="总周期数"
              name="total_period"
              className="newflags-item"
              validate={(value)=>requirefloatnumberValidate(value, '总周期数')}
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
