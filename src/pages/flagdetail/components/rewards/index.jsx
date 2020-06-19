import React from 'react'
import { connect } from 'dva'
import './index.less'

const Rewards = (props)=>{
  return (
    <div className="rewards-container">
      <RewardsItem avatarurl="https://mixin-images.zeromesh.net/gj-3TbH_lYSvwLtp-gG_B8w6X68Jg6JqIojf5BLAA54xW0AxQXsOefMlFVbDgYbILs4hsBhqAeD4THfzqce-Enqq=s256" name="凯" time="2020-06-20 10:09:00" amount={1000} unit="Box"/>
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