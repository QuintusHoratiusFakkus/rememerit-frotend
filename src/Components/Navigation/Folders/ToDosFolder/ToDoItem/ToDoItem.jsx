import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Typography from '@material-ui/core/Typography';
import { navStyles } from './mainThemes.js';

function ToDoItem(props) {
  const classes = navStyles();

  return(
    <ListItem button className={classes.listItem}>
      <ListItemIcon className={classes.listItemIcon} >
        <FiberManualRecordIcon className={classes.icon} style={{ color: props.toDoColor }}/>
      </ListItemIcon>
      <ListItemText primary={<Typography noWrap style={{fontWeight: '300'}}>{props.toDoName}</Typography>} />
    </ListItem>
  )
}

export default ToDoItem;
