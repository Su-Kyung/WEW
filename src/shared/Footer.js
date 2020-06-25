import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#eee',
      padding: theme.spacing(3, 0),
      borderTop: `0.1px solid ${theme.palette.divider}`,
      borderColor: '#eee',
    },
  }));
  

export default function Footer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.footer} align="center">
        <Container component="footer" maxWidth="sm">
          
          <Typography class="Footer-text" display="block">
            ABOUT WEW <br/>

            WEW | 대표자명 | wewoo2020@gmail.com <br/>

            <Link color="inherit" href="https://www.instagram.com/we_woo_2020/">
              {/* <InstagramIcon></InstagramIcon> */}
              WEW Instagram
            </Link>
            {' | '}
            <Link color="inherit" href="https://www.notion.so/WELCOME-TO-WEW-1cc9fbe9b0fb4a0f8322d493f41de2e5">
              WEW Notion
            </Link> <br/>

            Copyright © WEW

          </Typography>
          
        </Container>
      </div>
    </React.Fragment>
  );
}
