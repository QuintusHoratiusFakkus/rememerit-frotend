import React from 'react';
import NavItem from './NavItem/NavItem.jsx';

import List from '@material-ui/core/List';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';

function NavList() {
  return(
    <List>
      <NavItem word={'Inbox'} path={'inbox'} icon={<MailOutlinedIcon style={{ color: '#4F94FC' }}/>}  />
      <NavItem word={'Today'} path={'today'} icon={<TodayOutlinedIcon style={{ color: '#23BE4C' }}/>}  />
      <NavItem word={'Calendar'} path={'calendar'} icon={<DateRangeIcon style={{ color: '#9F6FE7' }}/>}  />
    </List>
  )
}

export default NavList;
