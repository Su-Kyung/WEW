import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(16),
  },
  areaIndigo: {
    backgroundColor: '#27385e',
  },
  areaWhite: {
    backgroundColor: '#fff',
  },
  aboutTitle: {
    paddingBottom: theme.spacing(10),
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.areaWhite} align="center">
      <img src="about_title_web.png" width="1300px" className={classes.aboutTitle}></img>

      <Container component="main1" maxWidth="xl" className={classes.areaIndigo} >
        <CssBaseline />
        <div className={classes.paper} >
          <img src="newsletter_about1.png" width="618.3px" />
        </div>
      </Container>

      <Container component="main2" maxWidth="xl" className={classes.areaWhite} >
        <CssBaseline />
        <div className={classes.paper} >
          <img src="newsletter_about2.png" width="677.5px" />
        </div>
      </Container>
    </div>
  );
}

export default About;