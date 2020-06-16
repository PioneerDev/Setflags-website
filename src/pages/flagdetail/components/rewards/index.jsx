import React from 'react'
import { connect } from 'dva'
import './index.less'

const Rewards = (props)=>{
  return (
    <div>
      rewards
    </div>
  )
}

export default connect(({flag})=>({flag}))(Rewards)