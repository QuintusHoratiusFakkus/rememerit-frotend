import React, {useState} from 'react'

import s from './Inbox.module.css'

import Senders from './Senders/Senders.jsx'
import ReceivedToDos from './ReceivedToDos/ReceivedToDos.jsx'

export default function Inbox() {

  return (
    <div className={s.wrapper}>
      <Senders/>
      <ReceivedToDos/>
    </div>
  )
}
