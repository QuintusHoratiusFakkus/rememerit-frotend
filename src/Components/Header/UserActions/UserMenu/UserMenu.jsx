import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import s from './UserMenu.module.css';

import api from './../../../../Api/api.js'

import {loginStatus} from './../../../../Actions/loginStatus.js';

import {StyledButton} from './mainThemes.js';

import Tooltip from '@material-ui/core/Tooltip';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function UserMenu() {
  const dispatch = useDispatch()
  const history = useHistory()
  let identificator

  const logout = () => {
    localStorage.removeItem('auth')
    dispatch(loginStatus(false))
    history.push('/')
  }

  const onMouseDown = (e) => {
    timeout()
  }

  const timeout = () => {
    identificator = setTimeout(() => {
      api.deleteUser()
      logout()
    }, 3000)
  }

  const stopDeleting = () => {
    clearTimeout(identificator)
  }

  return(
    <div className={s.wrapper}>
      <Tooltip
        title="To delete account hold 3 sec."
        arrow
      >
        <button
          className={s.deleteAccountBtn}
          onMouseDown={onMouseDown}
          onMouseUp={stopDeleting}
        >
          Delete account
        </button>
      </Tooltip>

      <Tooltip
        title="Logout"
        arrow
      >
        <StyledButton onClick={logout}>
          <ExitToAppIcon/>
        </StyledButton>
      </Tooltip>
    </div>
  )
}

export default UserMenu;
