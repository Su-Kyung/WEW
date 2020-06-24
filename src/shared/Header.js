import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import SimpleModal from '@material-ui/core/Modal';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Header() {
  const classes = useStyles();


  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

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
          <img src="/logo_indigo.png" width="188px"></img>
        </Typography>
        <IconButton type="button" onClick={handleOpen}>
          <MenuIcon style={{ fontSize: 80 }} className={classes.menuIcon}/>
        </IconButton>
      </Toolbar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </React.Fragment>
  );
}