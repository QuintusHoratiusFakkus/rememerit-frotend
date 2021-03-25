import React from 'react';
import s from './Header.module.css';

import UserActions from './UserActions/UserActions.jsx';

function Header() {
  return(
    <div className={s.wrapper}>
      <UserActions/>
    </div>
  )
}

export default Header;
