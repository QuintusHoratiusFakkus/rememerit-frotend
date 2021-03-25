import React from 'react';

import { mainStyles } from './mainThemes.js';

import ToDoTitleInput from './ToDoTitleInput/ToDoTitleInput.jsx';
import ToDoDatePicker from './ToDoDatePicker/ToDoDatePicker.jsx';
import ToDoImageLoader from './ToDoImageLoader/ToDoImageLoader.jsx';
import ToDoInput from './ToDoInput/ToDoInput.jsx';
import ToDoEmail from './ToDoEmail/ToDoEmail.jsx';

import DialogContent from '@material-ui/core/DialogContent';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function AddToDoContent(props) {
  const classes = mainStyles()

  return(
    <DialogContent dividers className={classes.addToDoContent}>
      <ToDoTitleInput
        value={props.value.title}
        handleChange={props.handleInputChange}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <div className={classes.wrapper}>
          <ToDoDatePicker
            selectedDate={props.selectedDate}
            handleChange={props.handleDateChange}
          />
          <ToDoEmail
            value={props.value.email}
            handleChange={props.handleInputChange}
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
