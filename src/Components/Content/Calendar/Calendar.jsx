import React, {useState, useEffect, useRef} from 'react'
import shortid from 'shortid'

import {useDispatch, useSelector} from 'react-redux';
import {listRequestDate} from './../../../Actions/listRequestDate.js'
import {popupDate} from './../../../Actions/popupDate.js'

import {createCalendar, bordersMeasure} from './createCalendar.js'
import {toDosCountChange} from './toDosCountChange.js'

import s from './Calendar.module.css'
import api from './../../../Api/api.js'

import DayOfWeek from './DayOfWeek/DayOfWeek.jsx'
import DateContainer from './DateContainer/DateContainer.jsx'
import Actions from './Actions/Actions.jsx'
import ToDosList from './../Today/ToDosList/ToDosList.jsx'
import AddToDoButton from './../Today/AddToDoButton/AddToDoButton.jsx'

export default function Calendar() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state.toDoActionType)
  const toDoPopupDate = useSelector(state => state.popupDate)
  // const inputEl = useRef()

  const [calendarInputs, setCalendarInputs] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  })
  const [calendarArr, setCalendarArr] = useState([])
  // const [changes, setChanges] = useState({})
  const week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  useEffect(() => {
    if(calendarInputs.year >= 1970) {
      const calendarFunc = async () => {
        const borders = bordersMeasure(calendarInputs.year, calendarInputs.month)
        const toDosArr = await api.getToDosByDate(borders)
        setCalendarArr(createCalendar(toDosArr.data, borders))
      }

      calendarFunc()
    }
  }, [calendarInputs, selector])

  // useEffect(() => {
  //   const temporaryFunc = async () => {
  //     const changes = await toDosCountChange(selector)
  //     if (changes) {
  //       let cellNum = new Date(changes.from[0].date).getDate() - 1
  //       console.log('date', cellNum);
  //       console.log(inputEl);
  //       inputEl.current.children[cellNum].lastChild.lastChild.innerHTML = changes.from.length
  //
  //     }
  //   }
  //   temporaryFunc()
  //
  // }, [selector])

  const handleClick = (date) => {
    dispatch(listRequestDate(date))
    dispatch(popupDate(date))
  }

  const calendar = calendarArr.map((el) => {
    return <DateContainer
              key={shortid.generate()}
              el={el}
              month={calendarInputs.month}
              handleClick={handleClick}
            />
  })

  const weekToShow = week.map((el) => {
    return <DayOfWeek day={el} key={shortid.generate()}/>
  })

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.actions}>
          <Actions calendarInputs={calendarInputs} setCalendarInputs={setCalendarInputs}/>
        </div>
        <div className={s.days}>
          {weekToShow}
        </div>
        <div className={s.calendarContent}>
          {calendar}
        </div>
      </div>
      <span className={s.cellDate}>
        {new Intl.DateTimeFormat(
          'en-GB',
          {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          }
        ).format(toDoPopupDate)}
      </span>
      <ToDosList/>
      <AddToDoButton/>
    </div>

  )
}
