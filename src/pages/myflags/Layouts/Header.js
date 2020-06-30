import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();
  const {userInfo} = props
  console.log("ImageAvatars -> userInfo", userInfo)
  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={userInfo.avatar_url} className={classes.large} />
      <h1>{userInfo.full_name}</h1>
    </div>
  );
}
