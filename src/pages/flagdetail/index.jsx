import React,{useEffect} from 'react'
import { connect } from 'dva'
import DetailInfo from './components/detailinfo/index'
import Evidence from './components/evidence/index'
import Rewards from './components/rewards/index'
import './index.less'

const FlagDetail = (props)=>{
  const {flag:{flagDetail},dispatch} = props
  const {evidence,detailInfo,witness} = flagDetail
  // TODO: 获取id
  useEffect(()=>{
    if(!evidence) {
      dispatch({
        type: 'flag/getEvidenceList',
        payload: {
          flagid: detailInfo.id
        }
      })
    }

  },[detailInfo.id, dispatch, evidence])

  useEffect(()=>{
    if(!witness) {
      dispatch({
        type: 'flag/getWitness',
        payload: {
          flagid: detailInfo.id
        }
      })
    }
  },[detailInfo.id, dispatch, witness])

  useEffect(()=>{
    return ()=>{
      dispatch({
        type: 'flag/clean'
      })
    }
  },[dispatch])

  return(
    <div className="flagdetail-container">
        <DetailInfo />
        <Evidence />
        <Rewards />
    </div>
  )
}

export default connect(({flag})=>({flag}))(FlagDetail)
