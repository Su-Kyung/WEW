import React from 'react';
import { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Feedback } from 'pages';
import Header from './Header';
import Footer from './Footer';
import AppAppBar from './AppAppBar';

import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

// 앱 컴포넌트: 어떤 주소로 왔을 때 무엇을 보여줄지 정의
class App extends Component {
  render() {
    
    return (
      <div>
        {/* 반응형 웹 테스트 */}
        {/* <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile> */}
        {/* <Default>Not mobile (desktop or laptop or tablet)</Default> */}

        {/* <Desktop> */}
          <AppAppBar />
          <Header />
          
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/feedback" component={Feedback}/>

          <Footer />
        {/* </Desktop> */}

        {/* 아래 방법은 크기 변경될 때 다시 라우팅 되어야함 (좋은 방법이 아닌 듯 하다) */}
        {/* <Tablet>
          <Header />
          
          <Route exact path="/" component={TabletHome}/>
          <Route path="/about" component={TabletAbout}/>
          <Route path="/feedback" component={TabletFeedback}/>

          <Footer />
        </Tablet>

        <Mobile>
          <Header />
          
          <Route exact path="/" component={MobileHome}/>
          <Route path="/about" component={MobileAbout}/>
          <Route path="/feedback" component={MobileFeedback}/>

          <Footer />
        </Mobile> */}
      </div>
    );
  }
}


export default App;