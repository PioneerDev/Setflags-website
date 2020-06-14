import React from 'react'
import { connect } from 'dva'
import './index.less'
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import { useForm, Controller } from "react-hook-form"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  pos1: {
    marginBottom: 12,
    marginRight: 100,  
  },
});


const FlagDetail = (props)=>{
  const { handleSubmit, control } = useForm()
  const onSubmit = (data, e) => {
    console.log('data----->',data)
    console.log('e------>',e)
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return(
    <div>
      <form action="" className="newflags-container" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="newflags-title">金马立志详情</div>

        <CardContent class='typographyBox'>
          <Typography className={classes.pos1} color="textSecondary" gutterBottom>
            立志任务: 每天走步5小时
          </Typography>
          <Typography className={classes.pos} color="textSecondary" gutterBottom>
            立志时长: 60天
          </Typography>
          <Typography className={classes.pos} color="textSecondary" gutterBottom>
            立志金额: 100box
          </Typography>
          <Typography className={classes.pos} color="textSecondary" gutterBottom>
            剩余时间: 32天
          </Typography>
          {/* <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography> */}
          <Typography className={classes.pos} color="textSecondary">
            最大奖励: 90box
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            开始时间: 2020年6月13日
          </Typography>
          
        </CardContent>

        {/* <Controller
          as={<TextField id="task-basic" label="任务" variant="filled" className="newflags-item"></TextField>}
          name="task"
          control={control}
          defaultValue=''
        />

        <Controller
          as={
            <TextField id="days-basic" label="天数" variant="filled" className="newflags-item"></TextField>
          }
          name="days"
          control={control}
          defaultValue=''
        />

        <Controller
          as={
            <TextField id="maxWitness-basic" label="最大奖励" variant="filled" className="newflags-item"></TextField>
          }
          name="max_witness"
          control={control}
          defaultValue=''
        />

        <Controller
          as={
            <TextField id="maxWitness-basic" label="完成时间" variant="filled" className="newflags-item"></TextField>
          }
          control={control}
          name="times_achieved"
          defaultValue=''
        />

        <Button variant="contained" color="primary" className="newflags-submit" size="large" type="submit">
          点击新建
        </Button> */}
      </form>
    </div>
  )
}

export default connect(({flag})=>({flag}))(FlagDetail)
