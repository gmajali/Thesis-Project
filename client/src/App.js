import React, { Component } from 'react';
import MyNavBar from './NavBar/MyNavBar';
import './App.css';
import Home from './SlideShow/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from './components/Contact'
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
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;