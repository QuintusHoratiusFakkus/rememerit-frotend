import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const mainStyles = makeStyles({
  toDoItem: {
    padding: 0,
    height: '100%'
  },
  cardWrapper: {
    width: '100%',
    borderRadius: '0px',
    boxShadow: 'none',
    borderBottom: '1px solid #C7C7C7',
    paddingBottom: '4px',
    display: 'inline-flex',
  },
  toDoText: {
    maxHeight: '60px',
    textAlign: 'left'
  }
})

export const StyledButton = withStyles({
  root: {
    padding: '0 0 0 10px',
    borderRadius: 5,
    textTransform: 'none',
    maxHeight: '60px',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&:hover': {
      backgroundColor: 'transparent'
    },
  }
})(Button)
