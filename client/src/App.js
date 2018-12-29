import React, { Component } from 'react';
import MyNavBar from './NavBar/MyNavBar';
// import './App.css'
import $ from "jquery";


// import SlideShow from './SlideShow/SlideShow';
// import Form from './js/components/form'
// import List from './js/components/list'
import './App.css';


import Home from './SlideShow/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import Organization from './components/organizations'
import UserProfile from './userProfile/UserProfile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      test : [],
    };
  // console.log(allEvents, " after state befor component did mount app component")

  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyNavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/organizations' component={Organization} />
            <Route path='/Signup' component={Signup} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/profile' component={UserProfile} />
          </Switch>
         
          {/* <HomeCharities data={this.state.test[0]}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;