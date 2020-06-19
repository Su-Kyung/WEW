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
    footer: {
      backgroundColor: '#27385e',
      padding: theme.spacing(3, 0),
      borderTop: `0.1px solid ${theme.palette.divider}`,
      borderColor: '#fff',
    },
  }));
  

export default function Footer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div align="center" className={classes.footer}>
            <Typography class="Text-color">
                {'ABOUT WEW'}
            </Typography>
            <Typography class="Text-color">
                {'WEW | 대표자명 | wewoo2020@gmail.com'}
            </Typography>
            <Typography class="Text-color">
                <Link color="inherit" href="https://www.instagram.com/we_woo_2020/">
                    {'WEW 인스타그램'}
                </Link>
                {' | 추후 개설 연재 플랫폼 링크'}
            </Typography>
            <Typography class="Text-color">
                {'Copyright © WEW'}
            </Typography>
        </div>
    </React.Fragment>
  );
}
