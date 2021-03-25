import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem.jsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { navStyles, globalTheme } from './mainThemes.js';

import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function ToDosFolder(props) {
  const classes = navStyles();
  const [toDoName, setToDoName] = React.useState('');
  const [toDoList, setToDoList] = React.useState([]);

  const fontWeightChange = word => <Typography noWrap style={{fontWeight: '300'}}>{word}</Typography>

  const createToDoClick = (name) => {
    setToDoList([
      ...toDoList,
      {
        toDoName: name
      }
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(toDoName.trim()) {
      createToDoClick(toDoName);
      setToDoName('');
    }
  }

  const toDoListToShow = toDoList.map((el, index) => (
    <ToDoItem {...el} key={'toDo_'+index}/>
  ))

  return(
    <ThemeProvider theme={globalTheme}>
      <List className={classes.folders} component="nav">
        <ListItem button className={classes.dropbox} onClick={() => props.closeOpenFolder(props.index, !props.open)}>
          <ListItemIcon className={classes.listItemIcon}>
            {props.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary={fontWeightChange(props.name)} className={classes.listItemText} />
          <ListItemSecondaryAction>
            <IconButton
              className={classes.deleteFolder}
              style={{backgroundColor: 'transparent'}}
              onClick={() => props.deleteFolder(props.index)}
            >
              <ClearIcon className={classes.deleteFolderIcon} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse className={classes.collapse} in={props.open} timeout="auto" unmountOnExit >
          <List component="div" disablePadding
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader className={classes.subHeader} component="div" id="nested-list-subheader">
                <form onSubmit={handleSubmit}>
                  <OutlinedInput
                    className={classes.outlinedInput}
                    value={toDoName}
                    color='primary'
                    onChange={event => setToDoName(event.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          className={classes.foldersAddButton}
                          style={{backgroundColor: 'transparent'}}
                          component='label'
                        >
                          <input type="submit" hidden/>
                          <AddIcon className={classes.foldersAddIcon}/>
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </form>
              </ListSubheader>
          }>
          {toDoListToShow}
          </List>
        </Collapse>
      </List>
    </ThemeProvider>
  )
}

export default ToDosFolder;
