import React from 'react'
import { connect } from 'dva'
import dayjs from 'dayjs'
import './index.less'

const Evidence = (props)=>{
  const {flag:{flagDetail:{evidence}}} = props
  console.log("Evidence -> evidence", evidence)
  return (
    <div className="evidence-container">
      {evidence&&evidence.map((ele,idx)=>(
        <EvidenceItem type={ele.type} evidenceUrl={ele.url} time={ele.created_at} key={idx}></EvidenceItem>
      ))}
    </div>
  )
}


const EvidenceItem = (props)=>{
  const { evidenceUrl, time } = props
  return(
    <div className="evidence-item">
      <div className="evidence-item-media" style={{'backgroundImage':`url(${evidenceUrl})`}}>
        {/* <img src={evidenceUrl} alt="evidenceitm"></img> */}
      </div>
      <div className="evidence-item-time">{dayjs(time).format('YYYY-MM-DD HH:mm:ss')}</div>
    </div>
  )
}

export default connect(({flag})=>({flag}))(Evidence)