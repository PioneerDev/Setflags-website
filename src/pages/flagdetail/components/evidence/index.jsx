import React from 'react'
import { connect } from 'dva'
import './index.less'

const Evidence = (props)=>{
  return (
    <div className="evidence-container">
      <EvidenceItem evidenceUrl="http://dummyimage.com/100x150" time="2020-06-21 22:00:00"></EvidenceItem>
      <EvidenceItem evidenceUrl="http://dummyimage.com/100x150" time="2020-06-21 22:00:00"></EvidenceItem>
    </div>
  )
}


const EvidenceItem = (props)=>{
  const { evidenceUrl, time } = props
  console.log('ev--->',evidenceUrl)
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