import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    // container: {
    //     '& > *': {
    //         FlexDirection="column",
    //         flex="1",
    //         alignItems="center",
    //         color="red",
    //     },
    //   },
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
        //   color: "white",
        //   border: "1px solid white",
          background: "btn_subscribe.png",
          width: "157.9px",
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
                    <Container maxWidth="sm" text-align="center">
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

                    <Button><img src="btn_subscribe.png" width="157.9px"></img></Button>
                    
                    
                    
                    </Container>
                    <img class="Line-border" src="line_border.png"/>
                </div>
            </body>
        </div>
    )
}

export default Home;