import React,{useState,useEffect} from 'react'
import { connect } from 'dva'
import './index.less'
import {Button} from '@material-ui/core'
import { useDebounceFn } from 'ahooks';
import config from '../../../../../config/config';

const DetailInfo = (props)=>{
  const {flag:{flagDetail:{detailInfo}},dispatch} = props
  const userId =localStorage.getItem('userId')
  const payerId = detailInfo.payer_id
  const [verified, setVerified] = useState(detailInfo.verified)
  const [periodStatus, setPeriodStatus] = useState(detailInfo.period_status)
  const [uploadFiles, setFiles] = useState(null)

  useEffect(()=>{
    setVerified(detailInfo.verified)
    setPeriodStatus(detailInfo.period_status)
  },[detailInfo])

  const flagOperation = (op) =>{
    dispatch({
      type:'flag/opFlag',
      payload: {
        flagid:detailInfo.id,
        op
      }
    })
  }

  const onFileChange = (e) => {
    setFiles(e.currentTarget.files[0])
  }

  const { run } = useDebounceFn(() => {
    const formData = new FormData()
    formData.append('file',uploadFiles)
    dispatch({
      type: 'flag/uploadEvidence',
      payload: {
        flagid:detailInfo.id,
        file: formData,
        type: 'image'
      }
    })
  },{wait:1000})

  const renderVerify = (verified,status) =>{
    if(userId===payerId) {
      switch(periodStatus) {
        case 'UNDONE':
          return (
            <div className="detailinfo-button">
              <form id="uploadImg">
              <div className="detailinfo-upload"><input type="file" onChange={onFileChange}/></div>
              <br />
              <Button variant="contained" color="primary" onClick={run} disabled={!uploadFiles}>上传证据</Button>
              </form>
            </div>
          )
        case 'PAID':
          return (
            <div className="detailinfo-button">
              <form id="uploadImg">
              <div className="detailinfo-upload"><input type="file" onChange={onFileChange}/></div>
              <br />
              <Button variant="contained" color="primary" onClick={run} disabled={!uploadFiles}>上传证据</Button>
              </form>
            </div>
          )
        case 'DONE':
          return (
            <div>已上传证据</div>
          )
        case 'CLOSE':
          return (
            <div>已关闭</div>
          )
        default:

      }
    } else {
      switch(verified) {
        case 'NO':
          return <div>已见证未完成</div>
        case 'UNSET':
          return (<div className="detailinfo-button">
          <Button variant="contained" color="primary" style={{marginRight:10}} onClick={()=>flagOperation('yes')}>
            已完成
          </Button>
          <Button variant="contained" color="secondary" onClick={()=>flagOperation('no')}>
            未完成
          </Button>
        </div>)
        case 'YES':
          return <div>已见证完成</div>
        case 'UNDONE':
          return <div>待上传</div>
        default:
          return (<div></div>)
      }
    }
  }

  return (
    <div className="detailinfo-container">
      <div className="detailinfo-info">
         <div className="detailinfo-avatar">
            <img src={detailInfo.payer_avatar_url} alt=""/>
          </div>
          <div className="detailinfo-name">{detailInfo.payer_name}</div>
          <div className="detailinfo-task">{detailInfo.task}</div>
          <div className="detailinfo-info-txt">
             <div className="detailinfo-info-item">
               目前周期:{detailInfo.period}
             </div>
            <div className="detailinfo-info-item">
              总周期数:{detailInfo.total_period}
            </div>
          </div>
          <div className="detailinfo-info-txt">
            <div className="detailinfo-info-item">
              每个周期天数:{detailInfo.days_per_period}
            </div>
            <div className="detailinfo-info-item">
              总天数:{detailInfo.days}
            </div>
          </div>
        </div>
        {renderVerify(verified,periodStatus)}
  <div className="detailinfo-rewards">{detailInfo.amount}<span className="detailinfo-unit">{detailInfo.symbol}</span></div>
    </div>
  )
}

export default connect(({flag,user})=>({flag,user}))(DetailInfo)
