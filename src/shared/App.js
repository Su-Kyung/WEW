import React from 'react';
import { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Feedback } from 'pages';
import Button from '@material-ui/core/Button';


import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";


import SimpleDialogDemo from '../components/simple';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Container from '@material-ui/core/Container';


// 앱 컴포넌트: 어떤 주소로 왔을 때 무엇을 보여줄지 정의
class App extends Component {
  render() {
    
    return (
      <div>
        
        <Container xs={12}>
        <Header title="WEW"  />
        {/* <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main> */}
      </Container>
{/*       
        <Toolbar >
        
          <img class="App-header-logo" src="/logo_indigo.png" />
          <IconButton type="button" onClick={SimpleDialogDemo.HandleClickOpen}><MenuIcon /></IconButton>
          
        </Toolbar> */}

        

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