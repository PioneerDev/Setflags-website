import React from 'react'
import { connect } from 'dva'
import './index.less'

const Evidence = (props)=>{
  return (
    <div>
      evidence
    </div>
  )
}

export default connect(({flag})=>({flag}))(Evidence)