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
  const {ele} = props
  const statusKV = {
    "PAID": '已支付',
    "UNVERIFIED": '未验证',
    "VERIFIED": '已验证',
    "CLOSED": '已关闭',
    "DONE":"已完成"
  }
  console.log('ele---->',ele)
  const toDetail=()=>{
    console.log('111',ele)
    router.push({
      pathname: '/flagdetail',
      query: {
        ...ele
      }
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
