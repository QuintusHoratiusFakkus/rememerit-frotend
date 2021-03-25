import { makeStyles } from '@material-ui/core/styles';

export const navStyles = makeStyles({
  listItem: {
    '&:hover': {
      background: 'rgba(255,255,255, 1)'
    }
  },
  listItemIcon: {
    minWidth: '40px'
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  }
})
