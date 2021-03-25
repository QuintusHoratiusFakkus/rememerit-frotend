import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover'

export const StyledButton = withStyles({
  root: {
    padding: '2px',
    backgroundColor: '#EED0AF',
    '&:hover': {
      backgroundColor: '#EEDAC2'
    },
  }
})(IconButton)

export const CustomPopover = withStyles({
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
  }
})(Popover)
