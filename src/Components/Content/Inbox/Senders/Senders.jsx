import React, {useEffect, useState} from 'react'

import shortid from 'shortid'

import s from './Senders.module.css'

import List from './List/List.jsx'

import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill'

export default function Senders() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!window.EventSource) {
      alert("EventSource unsupported IE.");
      return;
    }

    let auth = localStorage.getItem('auth')
    let eventSource = new EventSourcePolyfill('/users', {
      headers: {
        auth
      }
    })

    // eventSource.addEventListener('auth', function(e) {
    //     let authStatus = JSON.parse(e.data)
    //     if (authStatus.session !== 'valid') {
    //         auth = ""
    //         eventSource.close()
    //     }
    // })
    const messageListener = async (e) => {
      let data = await Promise.all(e.data)
      setUsers(prev => [...prev, data])
    }

    eventSource.addEventListener('message', messageListener)

    return () => {
      eventSource.removeEventListener('message', messageListener)
      eventSource.close()
    }
  }, [])

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Active users</span>
      <List users={users}/>
    </div>
  )
}
