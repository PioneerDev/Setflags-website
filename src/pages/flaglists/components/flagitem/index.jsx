import React from 'react'
import {
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import './index.less'
import { connect } from 'dva'
import router from 'umi/router';

const FlagItem =  (props) => {
  const {ele,dispatch} = props
  const statusKV = {
    paid: '已支付',
    unverified: '未验证',
    verified: '已验证',
    closed: '已关闭'
  }
  console.log('ele---->',ele)
  const toDetail=()=>{
    console.log('111',ele)
    dispatch({
      type:'flag/toDetail',
      payload: ele
    }).then(res=>{
      router.push({
        pathname: '/flagdetail',
      })
    })
  }
  return (
    <List className="flagitem-container has-bottombar" onClick={()=>toDetail()}>
      <>
      <ListItem alignItems="flex-start" className="flagitem-item">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={ele.payer_avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={`${ele.task}`}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className="inline"
                color="textPrimary"
              >
                发起人: {ele.payer_name?ele.payer_name:'none'}
              </Typography>
            </>
          }
        />
        <div className="flagitem-status">{statusKV[ele.status]}</div>
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
    </List>
  )
}

export default connect(({flag}) =>({
  flag
}))(FlagItem)
