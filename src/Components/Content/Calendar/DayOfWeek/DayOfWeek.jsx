import React from 'react'

import s from './DayOfWeek.module.css';

export default function DayOfWeek(props) {


  return (
    <div className={s.wrapper}>
      {props.day}
    </div>
  )
}
