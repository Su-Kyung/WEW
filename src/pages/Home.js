import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import memberData from '../memberData.json';
import db from "../firebase";
import firebase from "../firebase";
import { firestore } from "../firebase"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        flexGrow: 1,
        },
    },
    textfield: {
      '& > *': {
            margin: theme.spacing(0.7),
            width: '424px',
            backgroundColor: '#fff',
            overflow: 'hidden',
            borderRadius: 10,
            margin: '9px',
        },
    },
    head: {
        '& > *': {
            flexGrow: 1,
        },
    },
    btnSubscribe: {
        marginTop: '14px',
        marginBottom: '56px',
    },
}));

const Home = () => {
    const classes = useStyles();
    const [email, setInput] = useState("");
    const [name, setNameInput] = useState("");
    // 버튼 클릭시 todos에 state 추가
    const addSubscriber = (event) => {
        event.preventDefault();
        //! firestore에 데이터 추가하기!
        //! collection - add
        db.collection("subscribers").add({
            name: name,
            email: email,
        });
        setNameInput("");
        setInput("");
        alert("구독신청이 완료되었습니다! 감사합니다🙂");
    };

    return (
        <div>
            <div className={classes.root} >
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <img src="line_home_introduce.png" class="Line-introduce"/>
                    <img src="home_introduce.png" width="334.6px" class="Home-introduce"/>
                </Grid>
            </div>

            <div className={classes.root} class="Home-body">
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <form className={classes.textfield} noValidate autoComplete="off">
                        <Grid item xs={12} >    
                            <TextField
                                value={name}
                                onChange={(event)=> {
                                    setNameInput(event.target.value);
                                }}
                                id="input_name"
                                placeholder="이름을 입력하세요."
                                variant="outlined"
                                fullWidth="true"
                                // inputProps={{style: {fontSize: 19}}} 폰트 사이즈 변경
                            />
                        </Grid>

                        <Grid item xs={12}> 
                            <TextField
                                value={email}
                                onChange={(event)=> {
                                    setInput(event.target.value);
                                }}
                                id="input_email"
                                placeholder="이메일을 입력하세요."
                                variant="outlined"
                                fullWidth="true"
                                InputLabelProps={{style: {fontSize: 19}}}/>
                        </Grid>
                            
                    </form>

                    <Grid item xs={12}> 
                        <Typography class="Text-color">
                            구독 시 개인정보 수집에 동의하는 것으로 간주합니다.
                        </Typography>
                    </Grid>
                        
                    <Grid item xs={12}>
                        <Button
                            className={classes.btnSubscribe}
                            disabled={!email && !name} //! 인풋값이 없을 경우 기능이 작동하지 않도록!
                            type="submit"
                            onClick={addSubscriber}
                        >
                            <img src="btn_subscribe.png" width="157.9px"></img>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;