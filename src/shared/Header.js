import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: '100px',
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
}));

export default function Header(props) {
  const classes = useStyles();

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
        <IconButton>
          <MenuIcon style={{ fontSize: 80 }} className={classes.menuIcon} />
        </IconButton>
      </Toolbar>
    </React.Fragment>
  );
}
