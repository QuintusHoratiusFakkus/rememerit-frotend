import React, {useState, useRef, useEffect} from 'react'

import s from './YearPicker.module.css'

import shortid from 'shortid'

import Input from '@material-ui/core/Input'
import Tooltip from '@material-ui/core/Tooltip'
import ListItemText from '@material-ui/core/ListItemText'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

export default function YearPicker({calendarInputsYear, yearChange}) {
  const [open, setOpen] = useState(false)
  const listRef = useRef()
  let selectedIndex = calendarInputsYear - 1970

  const yearVerification = e => {
    const regex = new RegExp(/^[0-9]*$/)
    if (regex.test(e.target.value[e.target.value.length - 1]) || e.target.value === '') {
      if (e.target.value > 2050) {
        setOpen(true)
        yearChange(e, 2050)
        return
      } else if (e.target.value.length <= 4) {
        yearChange(e, e.target.value)
      }
    }
  }

  const handleListItemClick = (event, index) => {
    event.target.classList.add('active')
    yearChange(event, index + 1970)
  }

  const listOfYears = Array.from({length: 81}, (_, i) => (
      <li
        className={`${s.yearsListItem} ${selectedIndex === i ? s.active : ''}`}
        key={shortid.generate()}
        name="year"
        onClick={(event) => handleListItemClick(event, i)}
      >
        {1970 + i}
      </li>
    )
  )

  useEffect(() => {
    if (calendarInputsYear <= 2050 && calendarInputsYear >= 1970) {
      listRef.current.children[selectedIndex].scrollIntoView(true)
    }
  }, [selectedIndex])

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div className={s.wrapper}>
      <Input
        className={s.yearInput}
        name="year"
        value={calendarInputsYear}
        onChange={(e) => {yearVerification(e)}}
      />
      <ul ref={listRef} className={s.yearsList}>
        {listOfYears}
      </ul>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          2050 year limit
        </Alert>
      </Snackbar>
    </div>
  )
}
