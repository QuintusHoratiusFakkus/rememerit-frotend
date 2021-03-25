import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'

export const StyledListItem = withStyles({
  root: {
    height: '40px'
  }
})(ListItem)
