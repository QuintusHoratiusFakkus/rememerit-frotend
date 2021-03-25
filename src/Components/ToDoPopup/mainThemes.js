import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';

export const mainStyles = makeStyles({
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px 10px 50px'
  },
  title: {
    '&::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: '#f5f5f5'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'linear-gradient(left, #8391A6, #536175)'
    },
    '&::-webkit-scrollbar-track': {
      background: '#eee',
      boxShadow: '0 0 1px 1px #fff, inset 0 0 7px rgba(0,0,0,0.0)'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: 'linear-gradient(left, #fff, #A7C2ED)',
      boxShadow: 'inset 0 0 1px 1px #8391A6'
    }
  },
  inputBase: {
    borderTop: '1px solid #ACACAC',
    borderBottom: '1px solid #ACACAC',
    width: '60%'
  }
})

export const Title = withStyles({
  root: {
    maxHeight: '3em',
    fontSize: '1.25rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    lineHeight: '1.6',
    textOverflow: 'ellipsis',
    overflow: 'auto'
  }
})(DialogTitle)
