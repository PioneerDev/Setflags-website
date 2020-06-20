import React from 'react'
import { connect } from 'dva'
import './index.less'
import {Button} from '@material-ui/core'
const DetailInfo = (props)=>{
  return (
    <div className="detailinfo-container">
      <div className="detailinfo-info">
         <div className="detailinfo-avatar">
            <img src="https://mixin-images.zeromesh.net/ml7tg1ZGrQt6IJSvEusWFfthosOB98GWN7r4EkmgSP8tbJHxK7OWki9zfZFFDCDOJE0nlLBR6dc4nbUguXE3Bg4=s128" alt=""/>
          </div>
          <div className="detailinfo-name">Jerry</div>
          <div className="detailinfo-task">做10次俯卧撑</div>
        </div>
        <div className="detailinfo-button">
          <Button variant="contained" color="primary" style={{marginRight:10}}>
            已完成
          </Button>
          <Button variant="contained" color="secondary">
            未完成
          </Button>
        </div>
        {/* //TODO: comment*/}
      <div className="detailinfo-rewards">1.000000000<span className="detailinfo-unit">BOX</span></div>
    </div>
  )
}

export default connect(({flag})=>({flag}))(DetailInfo)