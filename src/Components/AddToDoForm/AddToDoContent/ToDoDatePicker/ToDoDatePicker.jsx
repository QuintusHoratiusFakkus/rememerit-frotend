import React from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';

export default function ToDoDatePicker(props) {
  return(
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id="date-picker-inline"
      label="Task completion date"
      value={props.selectedDate}
      onChange={props.handleChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  )
}
