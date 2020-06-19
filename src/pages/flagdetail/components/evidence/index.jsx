import React from 'react'
import { connect } from 'dva'
import './index.less'

const Evidence = (props)=>{
  return (
    <div>
      <EvidenceItem></EvidenceItem>
    </div>
  )
}


const EvidenceItem = (props)=>{
  const { evidenceUrl, time } = this.props
  return(
    <div>
      <div>
        <image src={evidenceUrl}></image>
      </div>
      <div>{time}</div>
    </div>
  )
}

export default connect(({flag})=>({flag}))(Evidence)