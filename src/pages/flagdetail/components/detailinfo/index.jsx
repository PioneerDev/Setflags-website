import React,{useState} from 'react'
import { connect } from 'dva'
import './index.less'
import {Button} from '@material-ui/core'
const DetailInfo = (props)=>{
  // TODO: 见证
  console.log("DetailInfo -> props", props)
  // const { user:{userInfo}} = props
  const {flag:{
    flagDetail:{
      detailInfo
    }
  }} = props
  const userId =localStorage.getItem('userId')
  const payerId = detailInfo.payer_id
  console.log("DetailInfo -> detailinfo", detailInfo)
  const [verified, setVerified] = useState(detailInfo.verified)
  const [payerStatus, setPayerStatus] = useState(detailInfo.status)
  const [uploadFiles, setFiles] = useState(null)
  const {dispatch} = props

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
    console.log('upload---->',e.currentTarget.files)
    setFiles(e.currentTarget.files[0])
  }

  const onFileUpload = () => {
    console.log("onFileUpload -> uploadFiles", uploadFiles)
    const formData = new FormData()
    formData.append('file',uploadFiles)
    console.log("onFileUpload -> formData", formData)
    dispatch({
      type: 'flag/uploadEvidence',
      payload: {
        flagid:detailInfo.id,
        file: formData,
        type: 'image'
      }
    })
  }



  const renderVerify = (verified,status) =>{
    if(userId===payerId) {
      switch(status) {
        case 'UNVERIFIED':
          return (
            <div className="detailinfo-button">
              <form id="uploadImg">
              <div className="detailinfo-upload"><input type="file" onChange={onFileChange}/></div>
              <br />
              <Button variant="contained" color="primary" onClick={onFileUpload}>上传证据</Button>
              </form>
            </div>
          )
        case 'VERIFIED':
          return (
            <div>已上传证据</div>
          )
        case 'CLOSED':
          return (
            <div>已关闭</div>
          )
        default:
          
      }   
    } else {
      switch(verified) {
        case -1:
          return <div>已见证未完成</div>
        case 0:
          return (<div className="detailinfo-button">
          <Button variant="contained" color="primary" style={{marginRight:10}} onClick={()=>flagOperation('yes')}>
            已完成
          </Button>
          <Button variant="contained" color="secondary" onClick={()=>flagOperation('no')}>
            未完成
          </Button>
        </div>)
        case 1:
          return <div>已见证完成</div>
        default:
          return (<div className="detailinfo-button">
          <Button variant="contained" color="primary" style={{marginRight:10}} onClick={()=>flagOperation('yes')}>
            已完成
          </Button>
          <Button variant="contained" color="secondary" onClick={()=>flagOperation('no')}>
            未完成
          </Button>
        </div>)
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
        </div>
        {renderVerify(verified,payerStatus)}
        {/* //TODO: comment*/}
      <div className="detailinfo-rewards">{detailInfo.max_witness}<span className="detailinfo-unit">BOX</span></div>
    </div>
  )
}

export default connect(({flag,user})=>({flag,user}))(DetailInfo)