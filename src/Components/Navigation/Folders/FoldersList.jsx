import React from 'react';
import ToDosFolder from './ToDosFolder/ToDosFolder.jsx';

import List from '@material-ui/core/List';
import { navStyles } from './mainThemes.js';

import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

function FoldersList() {
  const classes = navStyles();
  const [foldersList, setFoldersList] = React.useState([]);
  const [foldersStatus, setFoldersStatus] = React.useState([])
  const [folderName, setFolderName] = React.useState('');

  const deleteFolder = index => {
    let retArray = foldersList.filter((el, i) => index !== i);
    let retStatusArray = foldersStatus.filter((el, i) => index !== i);
    setFoldersList(retArray);
    setFoldersStatus(retStatusArray);
  }

  const createFolderClick = (name) => {
    setFoldersList([
      ...foldersList,
      {
        name: name
      }
    ])
    setFoldersStatus([
      ...foldersStatus,
      false
    ])
  }

  const closeOpenFolder = (index, status) => {
    let retArr = new Array(...foldersStatus)
    retArr[index] = status
    setFoldersStatus(retArr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(folderName.trim()){
      createFolderClick(folderName)
      setFolderName('')
    }
  }

  const foldersListToShow = foldersList.map((el, index) => (
    <ToDosFolder
      createFolderClick={createFolderClick}
      closeOpenFolder={closeOpenFolder}
      open={foldersStatus[index]}
      {...el}
      index={index}
      deleteFolder={deleteFolder}
      key={'folder_'+index}
    />
  ))

  return(
    <List className={classes.folders} component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <form className={classes.subHeader} onSubmit={handleSubmit}>
            <TextField
              value={folderName}
              label="Folders"
              size="small"
              className={classes.textField}
              InputProps={{disableUnderline: true}}
              onChange={event => setFolderName(event.target.value)}
            />
            <IconButton
              className={classes.foldersAddButton}
              style={{backgroundColor: 'transparent'}}
              component='label'
            >
              <input type="submit" hidden/>
              <AddIcon className={classes.foldersAddIcon}/>
            </IconButton>
          </form>
        </ListSubheader>
    }>
      <Divider/>
      {foldersListToShow}
    </List>
  )
}

export default FoldersList;
