import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const navStyles = makeStyles({
  listItemIcon: {
    minWidth: '40px'
  },
  dropbox: {
    height: '30px',
    position: 'relative',
    '&:hover:first-child': {
      backgroundColor: 'transparent'
    }
  },
  deleteFolder: {
    width: '15px',
    height: '15px',
    color: 'rgba(0,0,0, .4)',
    '&:hover': {
      color: 'rgba(196,21,21, .8)'
    }
  },
  deleteFolderIcon: {
    width: '15px',
    height: '15px'
  },
  outlinedInput: {
    height: '35px',
    width: '100%'
  },
  foldersAddButton: {
    padding: '0px'
  }
})

export const globalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffb74d'
    }
  },
  overrides: {
    MuiListItem: {
      root: {
        height: '40px'
      }
    }
  }
})
