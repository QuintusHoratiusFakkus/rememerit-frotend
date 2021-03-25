import React from 'react';

import { Link } from "react-router-dom"

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { navStyles } from './mainThemes.js';

function NavItem({ word, icon, path }) {
  const classes = navStyles();

  return(
    <Link to={`/${path}`} className={classes.link}>
      <ListItem button className={classes.listItem} key={word}>
        <ListItemIcon className={classes.listItemIcon} >
          {icon}
        </ListItemIcon>
        <ListItemText primary={<Typography style={{fontWeight: '300'}}>{word}</Typography>} />
      </ListItem>
    </Link>
  )
}

export default NavItem;
