import React, {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {listRequestDate} from './../../../Actions/listRequestDate.js'
import {popupDate} from './../../../Actions/popupDate.js';

import DayToday from './Title/DayToday.jsx'
import ToDosList from './ToDosList/ToDosList.jsx'
import AddToDoButton from './AddToDoButton/AddToDoButton.jsx'

export default function Today() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(popupDate(new Date()))
    dispatch(listRequestDate(new Date()))
  }, [])

  return(
    <>
      <DayToday/>
      <div>
        <ToDosList/>
        <AddToDoButton/>
      </div>
    </>
  )
}
