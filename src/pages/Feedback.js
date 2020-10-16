import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// firebase 관련
import db from "../firebase";
import firebase from "../firebase";
import { firestore } from "../firebase"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
  },
  areaIndigo: {
    backgroundColor: '#27385e',
  },
  areaWhite: {
    backgroundColor: '#fff',
    paddingTop: theme.spacing(1),
  },
  subtitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, -3.3, 1.5),
  },
  textfield: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
    width: '514px',
  },
  feedback: {
    padding: theme.spacing(2, 0, 3),
  },
  contentTitle: {
    marginTop: theme.spacing(1),
  },
  describe: {
    margin: theme.spacing(0, -2.5, 8),
  }
}));

const Feedback = () => {
  const classes = useStyles();
  const [email,setEmailInput] = useState("");
  const [content, setContentInput] = useState("");
  // 버튼 클릭시 todos에 state 추가
  const addFeedback = (event) => {
      event.preventDefault();
      //! firestore에 데이터 추가하기!
      //! collection - add
      db.collection("feedback").add({
          content: content,
          email: email,
      });
      setEmailInput("");
      setContentInput("");
      alert("피드백 주셔서 감사합니다! 빠르게 답변해드릴게요.🙇🏻");
  };

  return (
    <div>
      <div className={classes.areaWhite}>
        <Container
        component="subHeader"
        maxWidth="sm">
          <div>
            <img src="feedback_title.png" width="200px" ></img>
          </div>
          <div className={classes.subtitle}>
            <img src="feedback_subtitle.png" width="587.1px"></img>
          </div>
          
        </Container>
      </div>
      
      <div className={classes.areaIndigo}>
        <Container component="main1" maxWidth="xl"  >
          <Container component="main" maxWidth="md">
            <CssBaseline />

            <div className={classes.paper} >
              <form className={classes.form} noValidate>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button 
                      id="btn_submit"
                      className={classes.submit}
                      type="submit"
                      disabled={!email && !content} //! 인풋값이 없을 경우 기능이 작동하지 않도록!
                      onClick={addFeedback}
                    >
                      <img src="btn_submit.png" width="180px"></img>
                    </Button>
                  </Grid>
                </Grid>

                <Grid container alignItems="center" className={classes.contentTitle}>
                  <Grid item xs={12} sm={2}>
                    <img src="feedback_email.png" height="27px"/>
                  </Grid>

                  <Grid item xs={12} sm={10}>
                    <TextField
                      value={email}
                      onChange={(event)=> {
                        setEmailInput(event.target.value);
                      }}
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
                  <Grid item xs={12} sm={2} className={classes.contentTitle}>
                    <img src="feedback_content.png" height="27px"/>
                  </Grid>
                  <Grid item xs={12} sm={10} >
                    <TextField
                      value={content}
                      onChange={(event)=> {
                        setContentInput(event.target.value);
                      }}
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

                <Grid container justify="flex-end">
                  <Grid item>
                    <img src="feedback_describe.png" width="514.2px" className={classes.describe}></img>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Container>
      </div>
      
    </div>
  );
}

export default Feedback;