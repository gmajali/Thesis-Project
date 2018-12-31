import React, { Component } from 'react';
import MyNavBar from './NavBar/MyNavBar';
import $ from "jquery";
import './App.css';
import Home from './SlideShow/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import CharityCard from './userProfile/CharityCard'
import UserProfile from './userProfile/UserProfile';
import CreateEvent from './components/createEvent';
// import eventsList from './components/eventsList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      test: [],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyNavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/CharityCard' component={CharityCard} />
            <Route path='/Signup' component={Signup} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/profile' component={UserProfile} />
            <Route path='/create' component={CreateEvent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;