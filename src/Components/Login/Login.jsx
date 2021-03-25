import React from 'react';
import api from './../../Api/api.js'
import axios from "axios"

import {useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

import {loginStatus} from './../../Actions/loginStatus.js';

import s from './Login.module.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Login(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: ''
  })
  const [error, setError] = React.useState({
    email: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let userdata = await api.login(loginData)
      axios.defaults.headers.common['auth'] = userdata.headers.auth

      localStorage.setItem('auth', userdata.headers.auth)
      dispatch(loginStatus(true))

      history.push('/today')
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
    for (let key in loginData) {
      tempState ={
        ...tempState,
        [key]: ''
      }
    }
    setLoginData(tempState)
  }

  const handleInputChange = event => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  }

  return(
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <span className={s.title}>Login page</span>
        <TextField
          required
          label='E-mail:'
          variant="outlined"
          error={!!error.email}
          name='email'
          autoComplete='off'
          value={loginData.email}
          onChange={handleInputChange}
          className={s.input}
          helperText={error.email}
        />
        <TextField
          required
          label='Password'
          variant="outlined"
          type="password"
          error={!!error.email}
          name='password'
          value={loginData.password}
          onChange={handleInputChange}
          className={s.input}
        />
        <div className={s.actions}>
          <Link to={`/registration`} className={s.link}>
            To Registration
          </Link>
          <Button component='label' disableRipple>
            Login
          <input type="submit" hidden/>
          </Button>
        </div>
      </form>
    </div>
  )
}
