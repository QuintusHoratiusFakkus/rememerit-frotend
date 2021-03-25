import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const mainStyles = makeStyles({
  input: {
    display: 'none'
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tooltipImage: {
    maxHeight: '45vh',
    maxWidth: '45vh',
    objectFit: 'contain'
  },
  deleteButton: {
    fontSize: '10px',
    backgroundColor: 'transparent',
    height: '20px',
    width: '140px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#62B3FF'
    }
  }
})

export const StyledTooltip = withStyles({
  tooltip: {
    maxHeight: 'max-content',
    maxWidth: 'max-content'
  }
})(Tooltip);
