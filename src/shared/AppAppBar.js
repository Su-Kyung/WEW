// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/premium-themes/onepirate

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/ToolBar';
import * as handleClickOpen from '../components/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu"


const styles = (theme) => ({
  title: {
    height: 86.4,
    [theme.breakpoints.down('md')]: {
      height: 60,
    },
    [theme.breakpoints.down('sm')]: {
      height: 36,
    },
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  menuIcon: {
    color: '#27385e',
    height: 86.4,
    [theme.breakpoints.down('md')]: {
      height: 64,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
    },
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            href="https://wewoo-4e68f.web.app/"
          >
            <img src="/logo_indigo.png" className={classes.title}></img>
          </Link>
          <div className={classes.right}>
            <IconButton type="button" onClick={handleClickOpen}>
              <MenuIcon style={{ fontSize: 80 }} className={classes.menuIcon} onClick={handleClickOpen}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);