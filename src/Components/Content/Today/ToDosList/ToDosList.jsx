import {useState, useEffect} from 'react';
import { mainStyles } from './mainThemes.js';

import {useSelector, useDispatch} from 'react-redux';

import {getToDoListThunk} from './../../../../Thunks/getToDoListThunk.js';
import {listRequestDate} from './../../../../Actions/listRequestDate.js'

import shortid from 'shortid';

import ToDoListItem from './ToDoListItem/ToDoListItem.jsx';

import List from '@material-ui/core/List';

function ToDosList() {
  const classes = mainStyles();
  const selector = useSelector(state => state.toDosList)
  const reqDate = useSelector(state => state.listRequestDate)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getToDoListThunk({date: reqDate}))
  }, [reqDate])

  let toDosListToShow = selector.map((el, index) => (
    <ToDoListItem
      title={el.title}
      key={shortid.generate()}
      date={reqDate}
      id={el._id}
    />
  ))

  return(
    <List className={classes.toDosList}>
      {toDosListToShow}
    </List>
  )
}

export default ToDosList;
