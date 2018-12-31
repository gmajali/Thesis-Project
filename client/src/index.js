import React from 'react';
import ReactDOM from 'react-dom';
//azhar//
import {render} from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/store/index";
import index from "./js/index"
//azhar//
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

signUp: function(req, res){
  var password = generateHashPassword(req.body.password);
  knex('users').where('email', req.body.email).then(res => {
      if (res.length === 0) {
          return knex('users').insert({name: req.body.name, 
          email: req.body.email, password: password, telephone: req.body.telephone}).then(result => {
            console.log(`successful insert ${result}`)
        })
      } else {
        knex.catch(err => {
            console.log(`error => ${err}`);
        });
      }
  })
}
