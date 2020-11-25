import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (theme) => ({
  root: {
    height: 148,
    [theme.breakpoints.down('md')]: {
      height: 96,
    },
    [theme.breakpoints.down('sm')]: {
      height: 64,
    },
  },
});

export default withStyles(styles)(Toolbar);