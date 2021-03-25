import React from 'react'
import api from './../../Api/api.js'

import { useHistory } from "react-router-dom";

import {Link} from 'react-router-dom'

import s from './Registration.module.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Registration(props) {
  let history = useHistory()

  const [regState, setRegState] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [error, setError] = React.useState({
    email: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await api.registration(regState)

      // let tempState = {}

      // for (let key in error) {
      //   tempState ={
      //     ...tempState,
      //     [key]: ''
      //   }
      // }
      //
      // setError(tempState)

      history.push('/')
    } catch(error) {
      let tempObj = {}
      error.response.data.errors.forEach((i) => {
        tempObj = {
          ...tempObj,
          [i.param]: i.msg
        }
      })
      setError(tempObj)
    }
    let tempState = {}
    for (let key in regState) {
      tempState ={
        ...tempState,
        [key]: ''
      }
    }
    setRegState(tempState)
  }

  const handleInputChange = event => {
    setRegState({
      ...regState,
      [event.target.name]: event.target.value
    })
  }

  return(
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <span className={s.title}>Registration page</span>
        <TextField
          required
          label='E-mail:'
          variant="outlined"
          error={!!error.email}
          name='email'
          autoComplete='off'
          value={regState.email}
          onChange={handleInputChange}
          className={s.input}
          helperText={error.email}
        />
        <TextField
          required
          label='Password'
          variant="outlined"
          type="password"
          error={!!error.password}
          name='password'
          value={regState.password}
          onChange={handleInputChange}
          className={s.input}
          helperText={error.password}
        />
        <TextField
          required
          label='Password confirm'
          variant="outlined"
          type="password"
          error={!!error.password}
          name='passwordConfirm'
          value={regState.passwordConfirm}
          onChange={handleInputChange}
          className={s.input}
        />
        <div className={s.actions}>
          <Link to="/" className={s.link}>
            To Login
          </Link>
          <Button component='label' disableRipple>
            Registration
            <input type="submit" hidden/>
          </Button>
        </div>
      </form>
    </div>
  )
}
