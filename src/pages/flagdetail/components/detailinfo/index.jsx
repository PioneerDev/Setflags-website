import React from 'react'
import { connect } from 'dva'
import './index.less'
import {Button} from '@material-ui/core'
const DetailInfo = (props)=>{
  console.log("DetailInfo -> props", props)
  const {flag:{
    flagDetail:{
      detailInfo
    }
  }} = props
  console.log("DetailInfo -> detailinfo", detailInfo)

  const flagOperation = (op) =>{

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
        <div className="detailinfo-button">
          <Button variant="contained" color="primary" style={{marginRight:10}} onClick={()=>flagOperation('yes')}>
            已完成
          </Button>
          <Button variant="contained" color="secondary" onClick={()=>flagOperation('no')}>
            未完成
          </Button>
        </div>
        {/* //TODO: comment*/}
      <div className="detailinfo-rewards">{detailInfo.max_witness}<span className="detailinfo-unit">BOX</span></div>
    </div>
  )
}

export default connect(({flag})=>({flag}))(DetailInfo)