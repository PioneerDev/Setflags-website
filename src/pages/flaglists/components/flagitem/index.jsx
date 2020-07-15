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
  const toDetail=()=>{
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
        <div className="flagitem-status">{ele.verified=='unset'?'未见证':'见证'}</div>
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
    </List>
  )
}

export default connect(({flag}) =>({
  flag
}))(FlagItem)
