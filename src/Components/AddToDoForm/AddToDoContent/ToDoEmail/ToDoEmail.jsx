import React from 'react';

import { mainStyles } from './mainThemes.js';

import TextField from '@material-ui/core/TextField';

export default function ToDoTitleInput(props) {
  const classes = mainStyles();

  return(
    <TextField
      className={classes.contentTextField}
      name='email'
      id="standard-textarea"
      label="Write receiver email"
      value={props.value}
      onChange={props.handleChange}
      autoComplete='off'
      variant="outlined"
    />
  )
}
