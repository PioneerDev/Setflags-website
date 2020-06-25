import React from 'react'
import { connect } from 'dva'
import './index.less'

const Evidence = (props)=>{
  const {flag:{flagDetail:{evidence}}} = props
  return (
    <div className="evidence-container">
      {evidence&&evidence.map((ele,idx)=>(
        <EvidenceItem type={ele.type} evidenceUrl={ele.url} time={ele.create_at} key={idx}></EvidenceItem>
      ))}
    </div>
  )
}


const EvidenceItem = (props)=>{
  const { evidenceUrl, time } = props
  return(
    <div className="evidence-item">
      <div className="evidence-item-media">
        <img src={evidenceUrl} alt="evidenceitm"></img>
      </div>
      <div className="evidence-item-time">{time}</div>
    </div>
  )
}

export default connect(({flag})=>({flag}))(Evidence)