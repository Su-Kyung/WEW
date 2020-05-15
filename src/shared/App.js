import React from 'react';
import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Feedback } from 'pages';
import Button from '@material-ui/core/Button';


import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

// import ClickAway from '../components/example';
import FullScreenDialog from '../components/menu';




// 앱 컴포넌트: 어떤 주소로 왔을 때 무엇을 보여줄지 정의
class App extends Component {
  render() {
    // const setOpen = false;
    // const handleClickOpen = () => {
    //   setOpen=true;
    // };
    // const handleClickClose = () => {
    //   setOpen=false;
    // };


    return (
      <div>
        {/* <header class="App-header">
          <img class="App-header-logo" src="/logo_indigo.png"/>
   
          <Button id="btn_menu" class="Button-menu">
            <img src="/btn_menu.png" width="71.2px" height="auto" text-align="center"/>
            <img src="/btn_menu.png" width="71.2px" height="auto" text-align="center" onClick={handleClickOpen}/>
          </Button>
        </header> */}

        <Toolbar>
        {/* <Typography marginLeft="theme.spacing(17)" flex="1" >WEW</Typography> */}
        <img class="App-header-logo" src="/logo_indigo.png" />
        {/* 
            버리는 코드
            <Button id="btn_menu" class="Button-menu" >
            <img src="/btn_menu.png" width="71.2px" height="auto" text-align="center" onClick={handleClickOpen}/>
        </Button>
        */}
        {/* 메뉴 아이콘 */}
          <IconButton type="button" onClick={FullScreenDialog}><MenuIcon /></IconButton>
        </Toolbar>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/feedback" component={Feedback}/>
      </div>
    );
  }
}








export default App;


            // <DialogContent dividers>
            //   <Button id="btn_home">
            //     <img src="/btn_menu_home.png" width="150.4px" height="auto" text-align="center" onClick={handleClickOpen}/>
            //   </Button>
            //   <Button id="btn_about"> 
            //     <img src="/btn_menu_about.png" width="306.8px" height="auto" text-align="center" onClick={handleClickOpen}/>
            //   </Button>
            //   <Button id="btn_feedback">
            //     <img src="/btn_menu_feedback.png" width="306.5px" height="auto" text-align="center" onClick={handleClickOpen}/>
            //   </Button>
            // </DialogContent>