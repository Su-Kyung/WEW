import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


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
                    {/* 피드백 제출하기 버튼
                    <img class="Feedback-btn-submit" src="btn_submit.png"/> */}
                    <Button id="btn_submit" variant="outlined">제출하기</Button>
                    
                    <form className={classes.textfield} noValidate autoComplete="off">
                        {/* 피드백 작성
                        <img class="Feedback-input" src="feedback_email.png"/>
                        <img class="Home-input-email" src="input_box.png"/> */}
                        <TextField
                            id="feedback_email"
                            placeholder="회신받을 이메일 주소를 입력하세요."
                            variant="outlined"/>

                        <TextField
                            id="feedback_contents"
                            multiline
                            placeholder="내용을 입력하세요."
                            rows={10} />

                    </form>
                </Container>

            </div>
        </div>
    )
}

export default Feedback;