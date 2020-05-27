import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    textfield: {
      '& > *': {
        margin: theme.spacing(0.7),
        width: '424px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderRadius: 10,
      },
    },
    button: {
        '& > *': {
          titleColor: '#fff',
        },
      },
  }));

const Feedback = () => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <img class="Feedback" src="page_feedback.png"/>
                <img class="Feedback-waiting" src="feedback_waiting.png"/>
            </div>
            <div class="Feedback-body">
                <Container maxWidth="sm">
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    >

                    <Grid item container justify="flex-end">
                        <Button id="btn_submit">
                            <img src="btn_submit.png" width="157.9px"></img>
                        </Button>
                    </Grid>

                    <Grid item container spacing={1} flexGrow={1}>
                        <Grid
                        item xs={12}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                          
                            <img src="feedback_email.png" height="27px"/>
                         
                         
                            <TextField
                                id="feedback_email"
                                placeholder="회신받을 이메일 주소를 입력하세요."
                                variant="outlined"
                                className={classes.textfield}/>
                                
                           
                          
                        </Grid>


                        <Grid
                        item xs={12}
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start">
                        <img src="feedback_content.png" height="27px"/>
                        <TextField
                            id="feedback_contents"
                            multiline
                            variant="outlined"
                            placeholder="내용을 입력하세요."
                            rows={10}
                            className={classes.textfield} />
                        </Grid>
                    </Grid>

                </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Feedback;