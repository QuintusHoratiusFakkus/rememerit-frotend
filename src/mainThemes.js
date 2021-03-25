import { createMuiTheme } from '@material-ui/core/styles';

export const globalTheme = createMuiTheme({
  props: {
    MuiListItem: {
      disableRipple: true
    },
    MuiIconButton: {
      disableRipple: true
    },
    MuiButton: {
      disableRipple: true
    }
  }
})
