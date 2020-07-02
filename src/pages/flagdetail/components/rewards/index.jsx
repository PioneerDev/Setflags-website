import React,{ useEffect } from 'react'
import { connect } from 'dva'
import './index.less'

const Rewards = (props)=>{
console.log("Rewards -> props", props)
  const {flag:{flagDetail:{witness}}} = props
  console.log("Rewards -> witness", witness)
  return (
    <div className="rewards-container">
      {witness&&witness.map((ele,idx)=><RewardsItem avatarurl={ele.payee_avatar_url} name={ele.payee_name} time={ele.witnessed_time} amount={ele.amount} unit={ele.symbol} key={idx}/>)}
    </div>
  )
}

const RewardsItem = (props) => {
  const {avatarurl, name, time, amount, unit} = props

  return (
    <div className="rewards-item">
      <div className="rewards-item-info">
        <div className="rewards-item-avatar">
          <img src={avatarurl} alt="rewardsavatar"/>
        </div>
        {/* 一行隐藏 */}
        <div className="rewards-item-txt">
          <div className="rewards-item-name">{name}</div>
          <div className="rewards-item-time">{time}</div>
        </div>
      </div>
  <div className="rewards-item-amount">{amount} <span className="rewards-item-unit">{unit}</span></div>
    </div>
  )
}

export default connect(({flag})=>({flag}))(Rewards)