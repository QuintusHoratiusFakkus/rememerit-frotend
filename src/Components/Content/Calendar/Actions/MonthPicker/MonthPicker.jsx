import React, {useState} from 'react'

import s from './MonthPicker.module.css'

import shortid from 'shortid'

export default function MonthPicker({calendarInputsMonth, monthChange}) {
  const months = Array.from({length: 12}, (_, i) => {
    return new Date(null, i + 1, null).toLocaleDateString('en', {month: 'long'})
  })

  const handleListItemClick = (e, i) => {
    monthChange(e, i)
  }

  const listOfMonths = Array.from(months, (el, i) => (
      <li
        className={
          `${s.monthsListItem}
          ${calendarInputsMonth === i
          ?
          s.active
          :
          ''}`
        }
        key={shortid.generate()}
        name="month"
        onClick={(event) => handleListItemClick(event, i)}
      >
        {el}
      </li>
    )
  )

  return (
    <div className={s.wrapper}>
      <ul className={s.monthsList}>
        {listOfMonths}
      </ul>
    </div>
  )
}
