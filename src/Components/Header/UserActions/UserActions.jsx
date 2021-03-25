import React from 'react';

import UserMenu from './UserMenu/UserMenu.jsx';

import {StyledButton, CustomPopover} from './mainThemes.js'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function UserActions() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return(
    <>
      <StyledButton
        onClick={handleClick}
      >
        <AccountCircleIcon/>
      </StyledButton>
      <CustomPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <UserMenu/>
      </CustomPopover>
    </>
  )
}

export default UserActions;
