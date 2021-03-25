import { makeStyles } from '@material-ui/core/styles';

export const navStyles = makeStyles({
  listItem: {
    overflow: 'hidden',
    '&:hover': {
      background: 'rgba(255,255,255, 1)'
    }
  },
  listItemIcon: {
    minWidth: '30px',

  },
  icon: {
    width: '15px'
  }
})
