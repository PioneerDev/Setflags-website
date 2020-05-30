import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core'
import styles from './index.less'
import { connect } from 'dva'

const FlagItem =  (props) => {
  const {ele} = props
  console.log('ele---->',ele)
  return (
    <Card className={styles.container}>
      <CardContent className={styles.content}>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
            立志：
        </Typography>
        <Typography variant="h5" component="h2">
            {ele.task}
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
            剩余： {ele.days}天
        </Typography>
        <Typography variant="body2" component="p">
          最大奖励： {ele.max_witness}box
          <br />
          {`总金额： ${ele.amount}box`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" color="primary">查看更多</Button>
      </CardActions>
    </Card>
  )
}

export default connect(({flag}) =>({
  flag
}))(FlagItem)