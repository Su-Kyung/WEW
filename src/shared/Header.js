import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { Home, About, Feedback } from 'pages';
import { Route } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: '100px',
    backgroundColor: '#fff',
    paddingBottom: theme.spacing(8),
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  menuIcon: {
    color: '#27385e',
  },
  fakeIcon: {
    color: '#fff',
  },

  // 메뉴 dialog
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(12),
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "hidden",
    alignSelf: "start",
    paddingTop: theme.spacing(7),
  },
  root: {
    backgroundColor: "transparent",
  }
}));

export default function Header() {
  const classes = useStyles();

  // 메뉴 Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const routeHome = () => {
    window.location.href="/";
  }

  const routeAbout = () => {
    window.location.href="/about";
  }

  const routeFeedback = () => {
    window.location.href="/feedback";
  }


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton disabled='true'>
          <MenuIcon style={{ fontSize: 80 }} className={classes.fakeIcon}/>
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="#27385e"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link href="https://wewoo-4e68f.web.app/">  {/* home 주소 */}
            <img src="/logo_indigo.png" width="188px"></img>
          </Link>
        </Typography>
        <IconButton type="button" onClick={handleClickOpen}>
          <MenuIcon style={{ fontSize: 80 }} className={classes.menuIcon}/>
        </IconButton>
      </Toolbar>

      {/* 메뉴 Dialog */}
      <Dialog
        maxWidth='sm'
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        BackdropProps={{
          classes: {
           root: classes.root,
          }
         }
        }
        PaperProps ={{
          classes: {
           root: classes.paper
          }
        }}
        class="Menu-background"
      >
        <DialogTitle id="max-width-dialog-title">
          <img src="/logo_big_white.png" width="188px" ></img>
        </DialogTitle>

        <DialogActions className={classes.form} noValidate>
          <Button onClick={routeHome} className={classes.formControl}>
            <img src="/btn_menu_home.png" width="120px"></img>
          </Button>
          <Button onClick={routeAbout} className={classes.formControl}>
            <img src="/btn_menu_about.png" width="206.8px"></img>
          </Button>
          <Button onClick={routeFeedback} className={classes.formControl}>
            <img src="/btn_menu_feedback.png" width="200px"></img>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}