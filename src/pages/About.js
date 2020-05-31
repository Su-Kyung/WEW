import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.instagram.com/we_woo_2020/">
        WEW 인스타그램
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
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

        <Container component="main" maxWidth="xl">
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
    </div>
  );
}

export default About;