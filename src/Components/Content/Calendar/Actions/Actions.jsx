import React, {useState} from 'react'

import s from './Actions.module.css'

import MonthPicker from './MonthPicker/MonthPicker.jsx'
import YearPicker from './YearPicker/YearPicker.jsx'

export default function Actions({calendarInputs, setCalendarInputs}) {
  const handleChange = (e, value) => {
    setCalendarInputs({
      ...calendarInputs,
      [e.target.attributes["name"].value]: value
    })
  }

  return (
    <div className={s.wrapper}>
      <div className={s.hoverPanel}>
        <span className={s.YMDisplay}>Year Month</span>
      </div>
      <div className={s.actionsWrapper}>
        <YearPicker
          calendarInputsYear={calendarInputs.year}
          yearChange={handleChange}
        />
        <MonthPicker
          calendarInputsMonth={calendarInputs.month}
          monthChange={handleChange}
        />
      </div>
    </div>
  )
}
