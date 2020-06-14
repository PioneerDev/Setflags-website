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

const FlagItem =  (props) => {
  const {ele} = props
  const statusKV = {
    paid: '已支付',
    unverified: '未验证',
    verified: '已验证',
    closed: '已关闭'
  }
  console.log('ele---->',ele)
  return (
    <List className="flagitem-container has-bottombar">
      <>
      <ListItem alignItems="flex-start" className="flagitem-item">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
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
