import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import FlagIcon from '@material-ui/icons/Flag';
import BookIcon from '@material-ui/icons/Book';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import router from 'umi/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleList() {
  const classes = useStyles();

  const routerPush = (path) =>{
    router.push(path)
    // window.location.href = `${path}`
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <FlagIcon />
          </ListItemIcon>
          <ListItemText primary="我的立志" onClick={()=>{routerPush('/myflagslists')}}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="定投改变命运" onClick={()=>{routerPush('https://ri.firesbox.com/#/')}}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="帮助说明" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}
