import React, {useState} from 'react'

import shortid from 'shortid'

import s from './List.module.css';


export default function List(
  users
) {
  const [activeListItem, setActiveListItem] = useState(null)

  const handleChange = (e, index) => {
    setActiveListItem(index)
  }

  const list = Array.from(users.users, (el, i) => (
      <li
        className={`${s.listItem} ${activeListItem === i ? s.active : ''}`}
        key={shortid.generate()}
        onClick={(event) => handleChange(event, i)}
      >
        {el}
      </li>
    )
  )

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {list}
      </ul>
    </div>
  )
}
