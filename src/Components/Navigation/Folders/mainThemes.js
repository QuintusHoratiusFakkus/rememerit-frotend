import { makeStyles } from '@material-ui/core/styles';

export const navStyles = makeStyles({
  subHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  foldersAddIcon: {
    color: 'rgba(0,0,0, .4)',
    '&:hover': {
      color: 'rgba(0,0,0, .7)'
    }
  },
  foldersAddButton:{
    top: '4px',
  },
  textField: {
    width: '100%'
  }
})
