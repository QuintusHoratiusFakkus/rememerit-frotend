import React from 'react';
import NavList from './NavList/NavList.jsx';
import FoldersList from './Folders/FoldersList.jsx';

function Navigation() {
  return(
    <div>
      <NavList/>
      <FoldersList/>
    </div>
  )
}

export default Navigation;
