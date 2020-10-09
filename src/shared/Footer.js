import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#eee',
      padding: theme.spacing(3, 0),
      borderTop: `0.1px solid ${theme.palette.divider}`,
      borderColor: '#eee',
    },
  }));
  

export default function Footer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.footer} align="center">
        <Container component="footer" maxWidth="sm">
          
          <Typography class="Footer-text" display="block">
            ABOUT WEW <br/>

            WEW | 대표자 박 지 민 | 이메일 wewoo2020@gmail.com <br/>

            문의와 피드백은 위의 이메일로 부탁드립니다. <br/>
            
            {/* <InstagramIcon></InstagramIcon> */}

            <Link color="inherit" href="https://www.notion.so/WELCOME-TO-WEW-1cc9fbe9b0fb4a0f8322d493f41de2e5">
              위유 노션
            </Link>
            {' | '}
            <Link color="inherit" href="https://www.instagram.com/we_woo_2020/">
              위유 인스타그램
            </Link>
            {' | '}
            <Link color="inherit" href="https://blog.naver.com/wewoo2020">
              위유 네이버 블로그
            </Link> <br/>

            Copyright © WEW

          </Typography>
          
        </Container>
      </div>
    </React.Fragment>
  );
}
