import React,{useEffect} from 'react'
import { connect } from 'dva'
import DetailInfo from './components/detailinfo/index'
import Evidence from './components/evidence/index'
import Rewards from './components/rewards/index'
import './index.less'

const FlagDetail = (props)=>{
  console.log('props---->',props)
  const {flag:{flagDetail},dispatch} = props
  // TODO: 获取id
  useEffect(()=>{
    console.log('flagDetail--->',flagDetail)
    if(!flagDetail) {
      dispatch({
        type: 'flag/getEvidenceList'
      })
    }
  },
    [dispatch, flagDetail]
  )

  return(
    <div className="flagdetail-container">
        <DetailInfo />
        <Evidence />
        <Rewards />
    </div>
  )
}

export default connect(({flag})=>({flag}))(FlagDetail)
