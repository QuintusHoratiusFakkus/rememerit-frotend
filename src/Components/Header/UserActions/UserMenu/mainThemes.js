import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

export const StyledButton = withStyles({
  root: {
    padding: '2px',
    backgroundColor: '#EED0AF',
    '&:hover': {
      backgroundColor: '#EEDAC2'
    },
  }
})(IconButton)
