import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
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

export default function Menu() {
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