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



const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <body>
                <div>
                    <img class="Line-introduce" src="line_home_introduce.png"/>
                </div>
                <div>
                    <img class="Home-introduce" src="home_introduce.png"/>
                </div>
                <div class="Home-body">
                    <Container maxWidth="sm">
                    <form className={classes.textfield} noValidate autoComplete="off">

                    <TextField
                        id="input_name"
                        placeholder="이름을 입력하세요."
                        variant="outlined"
                        fullWidth="true"/>

                    <TextField
                        id="input_email"
                        placeholder="이메일을 입력하세요."
                        variant="outlined"
                        fullWidth="true"/>

                    {/* 개인정보 정책에 연결시켜주는 버튼
                    <img class="Home-policy" src=""/> */}


                    
                    </form>
                    {/* 제출 버튼
                    <img class="Home-btn-subscribe" src="btn_subscribe.png"/> */}
                    <Button
                        id="btn_subscribe"
                        variant="outlined"
                        titleColor="#fff"
                        className={classes.button}
                        >구독하기</Button>
                    </Container>
                    <img class="Line-border" src="line_border.png"/>
                </div>
            </body>
        </div>
    )
}

export default Home;