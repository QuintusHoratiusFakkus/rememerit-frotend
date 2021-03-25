import React from 'react';

import { mainStyles } from './mainThemes.js';

import TextField from '@material-ui/core/TextField';

export default function ToDoInput(props) {
  const classes = mainStyles();

  return(
    <TextField
      className={classes.contentTextField}
      label="ToDo"
      name="toDo"
      value={props.value}
      onChange={props.handleChange}
      variant="outlined"
      multiline
      rows={11}
    />
  )
}
