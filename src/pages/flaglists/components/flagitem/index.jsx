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
  const userId =localStorage.getItem('userId')
  const toDetail=()=>{
    dispatch({
      type:'flag/toDetail',
      payload: ele
    }).then(res=>{
      router.push({
        pathname: '/flagdetail',
        query:ele
      })
    })
  }

  const renderStatus=(ele)=>{
    const payerId = ele.payer_id
    if(userId == payerId) {
      switch(ele.period_status) {
        case 'UNDONE':
          return '未上传'
        case 'PAID':
          return '未上传'
        case 'DONE':
          return '已上传'
        case 'CLOSE':
          return '已关闭'
        default:
          return ''
      }
    } else {
      switch(ele.verified) {
        case 'NO':
          return '已见证'
        case 'UNSET':
          return '未见证'
        case 'YES':
          return '已见证'
        case 'UNDONE':
          return '待上传'
        default:
          return ''
      }
    }
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
          className="flagitem-info"
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
        <div className="flagitem-status">{renderStatus(ele)}</div>
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
    </List>
  )
}

export default connect(({flag}) =>({
  flag
}))(FlagItem)
