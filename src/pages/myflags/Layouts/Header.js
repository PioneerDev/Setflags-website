import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'dva'
import './index.less'

function ImageAvatars(props) {
  console.log("ImageAvatars -> props", props)
  const {user:{userInfo}} = props
  console.log("ImageAvatars -> userInfo", userInfo)
  return (
    <div className='myflags-header-container'>
      <Avatar alt="Remy Sharp" src={userInfo.avatar_url} className="myflags-header-avatar" />
      <h3>{userInfo.full_name}</h3>
    </div>
  );
}

export default connect(({user})=>({user}))(ImageAvatars)
