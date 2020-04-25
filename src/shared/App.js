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

          {/* <img class="Button-menu" src="/btn_menu.png"/> */}
          <Button id="btn_menu" class="Button-menu">
            <img src="/btn_menu.png" width="71.2px" height="auto" text-align="center"/>
          </Button>
        </header>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/feedback" component={Feedback}/>
      </div>
    );
  }
}

export default App;
