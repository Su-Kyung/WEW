import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


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

function Copyright() {
    return (
        <div align="center">
            <Typography class="Text-color">
                {'ABOUT WEW'}
            </Typography>
            <Typography class="Text-color">
                {'WEW | 대표자명 | wewoo2020@gmail.com'}
            </Typography>
            <Typography class="Text-color">
                <Link color="inherit" href="https://www.instagram.com/we_woo_2020/">
                    {'WEW 인스타그램'}
                </Link>
                {' | 추후 개설 연재 플랫폼 링크'}
            </Typography>
            <Typography class="Text-color">
                {'Copyright © WEW'}
            </Typography>
        </div>
    );
  }


const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <body>

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
                                    id="input_name"
                                    placeholder="이름을 입력하세요."
                                    variant="outlined"
                                    fullWidth="true"
                                    // inputProps={{style: {fontSize: 19}}} 폰트 사이즈 변경
                                    />
                            </Grid>

                            <Grid item xs={12}> 
                                <TextField
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
                        {/* 개인정보 정책에 연결시켜주는 버튼
                        <img class="Home-policy" src=""/> */}

                        <Grid item xs={12}>
                            <Button className={classes.btnSubscribe}>
                                <img src="btn_subscribe.png" width="157.9px"></img>
                            </Button>
                        </Grid>
                    </Grid>

                    <img class="Line-border" src="line_border.png"/>
                    
                    <Container component="footer" maxWidth="xl">
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </Container>

                </div>

            </body>
        </div>
    )
}

export default Home;