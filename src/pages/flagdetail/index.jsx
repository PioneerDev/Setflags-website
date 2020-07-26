import React,{useEffect} from 'react'
import { connect } from 'dva'
import DetailInfo from './components/detailinfo/index'
import Evidence from './components/evidence/index'
import Rewards from './components/rewards/index'
import './index.less'

const FlagDetail = (props)=>{
  const {flag:{flagDetail},dispatch,location} = props
  const {detailInfo} = flagDetail
  console.log("FlagDetail -> detailInfo", detailInfo)
  const {query} = location
  // const detailInfo = {...query}
  const flagid = query.id
  const {evidence,witness} = flagDetail
  useEffect(()=>{
    if(!evidence) {
      dispatch({
        type: 'flag/getFlagDetail',
        payload: {
          flagid
        }
      })
    }

  },[flagid, dispatch, evidence])

  useEffect(()=>{
    if(!evidence) {
      dispatch({
        type: 'flag/getEvidenceList',
        payload: {
          flagid
        }
      })
    }

  },[flagid, dispatch, evidence])

  useEffect(()=>{
    if(!witness) {
      dispatch({
        type: 'flag/getWitness',
        payload: {
          flagid
        }
      })
    }
  },[flagid, dispatch, witness])

  useEffect(()=>{
    return ()=>{
      dispatch({
        type: 'flag/clean'
      })
    }
  },[dispatch])

  return(
    <div className="flagdetail-container">
        {detailInfo&&<DetailInfo/>}
        {evidence&&<Evidence />}
        {witness&&<Rewards />}
    </div>
  )
}

export default connect(({flag})=>({flag}))(FlagDetail)
