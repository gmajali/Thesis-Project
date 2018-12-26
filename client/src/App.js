import React, { Component } from 'react';
import MyNavBar from './NavBar/MyNavBar';
import './App.css';
import SlideShow from './SlideShow/SlideShow';
// import Form from './js/components/form'
// import List from './js/components/list'

import Home from './SlideShow/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/Signup'
import Organization from './components/organizations'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyNavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/organizations' component={Organization} />
            <Route path='/Signup' component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;