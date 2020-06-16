import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

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
  }));



const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <body>
            <div class="Home-header">
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    
                    <div>
                        <img class="Line-introduce" src="line_home_introduce.png"/>
                    </div>
                    <div>
                        <img class="Home-introduce" src="home_introduce.png"/>
                    </div> 
                    
                </Grid>
            </div>

            <div className={classes.root} class="Home-body">
                    <Grid 
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <form className={classes.textfield} noValidate autoComplete="off">
                        <Grid item xs={12}>    
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
                            {/* 개인정보 정책에 연결시켜주는 버튼
                            <img class="Home-policy" src=""/> */}
                            </form>
                        <Grid item xs={12}>
                            <Button><img src="btn_subscribe.png" width="157.9px"></img></Button>
                        </Grid>
                    </Grid>

                    <img class="Line-border" src="line_border.png"/>
                </div>




        
                
            </body>
        </div>
    )
}

export default Home;