import React,{useEffect} from 'react'
import { connect } from 'dva'
import DetailInfo from './components/detailinfo/index'
import Evidence from './components/evidence/index'
import Rewards from './components/rewards/index'
import './index.less'

const FlagDetail = (props)=>{
  console.log('props---->',props)
  console.log('location',window.location)
  const {flag:{flagDetail},dispatch} = props
  const {evidence,detailInfo,witness} = flagDetail
  // TODO: 获取id
  useEffect(()=>{
    console.log('flagDetail--->',flagDetail)
    if(!evidence) {
      dispatch({
        type: 'flag/getEvidenceList',
        payload: {
          flagid: detailInfo.id
        }
      })
    }

  },[detailInfo.id, dispatch, evidence, flagDetail])

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
      console.log('clean up--->')
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
