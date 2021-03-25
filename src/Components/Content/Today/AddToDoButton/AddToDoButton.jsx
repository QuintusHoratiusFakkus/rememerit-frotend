import React from 'react';
import {useDispatch} from 'react-redux'
import { useHistory, useLocation } from "react-router-dom"

import {addToDoPopup} from './../../../../Actions/addToDoPopup.js'

import { mainStyles } from './mainThemes.js';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function AddToDoButton() {
  const classes = mainStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const handleClick = () => {
    dispatch(addToDoPopup(true))

    history.push(`${location.pathname}/newToDo`)
  }

  return(
    <>
      <Button
        className={classes.addTaskButton}
        startIcon={<AddIcon/>}
        style={{backgroundColor: 'transparent'}}
        onClick={handleClick}
      >
        Add new task
      </Button>
    </>
  )
}

export default AddToDoButton;
