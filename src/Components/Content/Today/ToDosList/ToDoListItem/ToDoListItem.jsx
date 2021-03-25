import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux'

import { getToDoListThunk } from './../../../../../Thunks/getToDoListThunk.js'
import { toDoActionType } from './../../../../../Actions/toDoActionType.js'

import {useHistory, useLocation} from 'react-router-dom'

import {toDoPopup} from './../../../../../Actions/toDoPopup.js'
import {popupDate} from './../../../../../Actions/popupDate.js'

import api from './../../../../../Api/api.js';

import s from './ToDoListItem.module.css';
import { mainStyles, StyledButton } from './mainThemes.js';

import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';

import EventNoteIcon from '@material-ui/icons/EventNote';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ToDoListItem(props) {
  const classes = mainStyles()
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const [checkbox, setCheckbox] = useState(true)
  let selectedDate = useSelector((state => state.popupDate))
  selectedDate = new Date(selectedDate)
  const id = props.id
  const date = props.date


  const handleOpen = () => {
    dispatch(toDoPopup(true))

    history.push(`${location.pathname}/todo?id=${id}`)
  }

  const handleClick = async () => {
    setCheckbox(false)
    try {
      await api.setAsCompleted({id})
      dispatch(getToDoListThunk({date}))
      if (location.pathname === '/calendar') {
        dispatch(toDoActionType({
          type: 'Delete',
          date: selectedDate
        }))
      }
    } catch(error) {
      throw error
    }
  }

  return(
    <ListItem className={classes.toDoItem}>
      <Card className={classes.cardWrapper}>
        <div className={s.toDoWrapper}>
          <IconButton className={s.toDoCheckbox} onClick={handleClick} style={{backgroundColor: 'transparent'}}>
            {checkbox ? <RadioButtonUncheckedIcon/> : <CheckCircleOutlineIcon/>}
          </IconButton>
          <StyledButton
            className={s.toDoButton}
            onClick={handleOpen}
          >
            <ListItemText className={classes.toDoText}>
              {props.title}
            </ListItemText>
          </StyledButton>
        </div>
      </Card>
    </ListItem>
  )
}

export default ToDoListItem;
