import React from 'react';

import { mainStyles, StyledTooltip } from './mainThemes.js';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import PhotoCamera from '@material-ui/icons/PhotoCamera';

export default function ToDoImageLoader(props) {
  const classes = mainStyles();

  return(
    <div className={classes.wrapper}>
      <input
        accept="image/*"
        className={classes.input}
        type="file"
        onChange={props.imageUpload}
        id='icon-button-file'
      />
      <label htmlFor='icon-button-file'>
        <StyledTooltip
          arrow
          disableFocusListener
          title={
            props.image ? <img className={classes.tooltipImage} src={props.image}/> : ''
          }
          aria-label="add"
        >
          <IconButton
            className={classes.iconButton}
            color="primary"
            component="span"
          >
          <PhotoCamera/>
          </IconButton>
        </StyledTooltip>
      </label>
      <Button
        className={classes.deleteButton}
        onClick={props.imageClear}
      >
        Delete image
      </Button>
    </div>
  )
}
