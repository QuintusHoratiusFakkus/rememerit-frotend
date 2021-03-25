import React from 'react';

import { mainStyles } from './mainThemes.js';

import ToDoDatePicker from './ToDoDatePicker/ToDoDatePicker.jsx';
import ToDoImageLoader from './ToDoImageLoader/ToDoImageLoader.jsx';
import ToDoInput from './ToDoInput/ToDoInput.jsx';

import DialogContent from '@material-ui/core/DialogContent';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function AddToDoContent(props) {
  const classes = mainStyles();

  return(
    <DialogContent dividers className={classes.addToDoContent}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <div className={classes.wrapper}>
          <ToDoDatePicker
            selectedDate={props.selectedDate}
            handleChange={props.handleDateChange}
          />
          <ToDoImageLoader
            image={props.image}
            imageUpload={props.imageUpload}
            imageClear={props.imageClear}
          />
        </div>
      </MuiPickersUtilsProvider>
      <ToDoInput
        value={props.value.toDo}
        handleChange={props.handleInputChange}
      />
    </DialogContent>
  )
}

export default AddToDoContent;
