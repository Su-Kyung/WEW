import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(20),
  },
  areaIndigo: {
    backgroundColor: '#27385e',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
  textfield: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
  },
  feedback: {
    margin: theme.spacing(2, 0, 16),
  },
  contentTitle: {
    marginTop: theme.spacing(1),
  },
}));

const Feedback = () => {
  const classes = useStyles();

  return (
    <div>
        <Container component="main1" maxWidth="xl" className={classes.areaIndigo} >
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={classes.paper} >
                    <form className={classes.form} noValidate>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button id="btn_submit" className={classes.submit} type="submit">
                                <img src="btn_submit.png" width="157.9px"></img>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container alignItems="center" className={classes.contentTitle}>
                        <Grid item xs={12} sm={3}>
                            <img src="feedback_email.png" height="27px"/>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="feedback_email"
                                placeholder="회신받을 이메일 주소를 입력하세요."
                                variant="outlined"
                                required
                                fullWidth
                                autoFocus
                                className={classes.textfield}
                            />
                        </Grid>
                    </Grid>

                    <Grid container alignItems="top" className={classes.feedback}>
                        <Grid item xs={12} sm={3} className={classes.contentTitle}>
                            <img src="feedback_content.png" height="27px"/>
                        </Grid>
                        <Grid item xs={12} sm={9} >
                            <TextField
                                id="feedback_contents"
                                multiline
                                fullWidth
                                variant="outlined"
                                placeholder="내용을 입력하세요."
                                required
                                rows={10}
                                className={classes.textfield}
                            />
                        </Grid>
                    </Grid>

                    </form>
                </div>
            </Container>
        </Container>

        <Container component="main" maxWidth="xl">
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
    </div>
  );
}

export default Feedback;