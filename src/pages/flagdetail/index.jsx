import React from 'react'
import { connect } from 'dva'
import DetailInfo from './components/detailinfo/index'
import Evidence from './components/evidence/index'
import Rewards from './components/rewards/index'
import './index.less'

const FlagDetail = (props)=>{
  return(
    <div className="flagdetail-container">
        <DetailInfo />
        <Evidence />
        <Rewards />
    </div>
  )
}

export default connect(({flag})=>({flag}))(FlagDetail)
