import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from "@material-ui/core/styles/shadows"

// A custom theme for this app
const theme = createMuiTheme({
  // Don't ask me how or why this works. It just does.
  shadows: Array(25).fill("none") as Shadows,
  typography: {
    "fontFamily": `"Arial", sans-serif`,
    "fontWeightRegular": 700,
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#24262B',
    },
  },
});

export default theme;
