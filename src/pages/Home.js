import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

const Home = () => {
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
                    <img class="Home-input-name" src="input_box.png"/>
                    <img class="Home-input-email" src="input_box.png"/>
                    {/* <img class="Home-policy" src=""/> //개인정보 정책 */}
                    <img class="Home-btn-subscribe" src="btn_subscribe.png"/>
                    <img class="Line-border" src="line_border.png"/>
                </div>
            </body>
        </div>
    )
}

export default Home;