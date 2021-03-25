import React from 'react';
import s from './Title.module.css';

function DayToday() {
  const date = new Date();

  const getDateNow = (setting) => {
    return date.toLocaleString('en-US', setting);
  }
  return(
    <div className={s.title}>
      <span className={s.titleText}>Today</span>
      <span className={s.date}>{`${getDateNow({weekday: 'long'})}, ${date.getDate()} ${getDateNow({month: 'long'})}`}</span>
    </div>
  )
}

export default DayToday;
