import React from 'react'
import { connect } from 'dva'
import './index.less'

const Evidence = (props)=>{
  console.log('props--->', props)
  const {flag:{flagDetail}} = props
  console.log('flagDetail-->', flagDetail)
  return (
    <div className="evidence-container">
      {flagDetail&&flagDetail.map((ele,idx)=>(
        <EvidenceItem type={ele.type} evidenceUrl={ele.url} time={ele.time} key={idx}></EvidenceItem>
      ))}
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