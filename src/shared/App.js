import React from 'react';
import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Feedback } from 'pages';
import Button from '@material-ui/core/Button';




// 앱 컴포넌트: 어떤 주소로 왔을 때 무엇을 보여줄지 정의
class App extends Component {
  render() {
    return (
      <div>
        <header class="App-header">
          <img class="App-header-logo" src="/logo_indigo.png"/>
   
          <Button id="btn_menu" class="Button-menu">
            <img src="/btn_menu.png" width="71.2px" height="auto" text-align="center"/>
            {/* <img src="/btn_menu.png" width="71.2px" height="auto" text-align="center" onClick={handleClickOpen}/> */}
          </Button>

          {/* Customized Dialog 추가 */}
          

        </header>
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