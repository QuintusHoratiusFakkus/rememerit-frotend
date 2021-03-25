import React, {useState} from 'react'

import s from './DateContainer.module.css';

import Badge from '@material-ui/core/Badge';

export default function DateContainer({el, month, handleClick}) {
  const [toDosQuantity, setToDosQuantity] = [el.toDoList.length]
  const monthOfEl = new Date(el.date).getMonth()
  const date = new Date(el.date).getDate()

  const dateToCompare = () => {
    let now = new Date()
    let current = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    return current
  }

  return (
    <div
      className={`${s.wrapper} ${month !== monthOfEl ? s.anotherMonth : null}`}
      onClick={() => handleClick(el.date)}
    >
      <div className={s.dateIndicator}>
        <span>{date}</span>
      </div>
      {toDosQuantity > 0 ? (
        <div className={s.badgeWrapper}>
          <span
            className={s.badge}
            style={
              el.date < new Date().setDate(1)
              ?
              {backgroundColor: '#FF9D9D'}
              :
              el.date > dateToCompare()
              ?
              {backgroundColor: '#D2EAD9'}
              :
              {backgroundColor: '#FFDEA0'}
            }>
            {toDosQuantity >= 99 ? '99+' : toDosQuantity}
          </span>
        </div>
      ) : null}
    </div>
  )
}
