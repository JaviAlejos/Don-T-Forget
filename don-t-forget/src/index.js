import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

var dispatch=function (state, action) {
debugger;
  switch (action.type) {
  case 'ADD_USER':
    return {user:action.user};
  default:
    return state;
  }
}

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUr_cu8TYlfFIc5v2ZatC5Su6zTobTR1M",
    authDomain: "dont-forget-685ba.firebaseapp.com",
    databaseURL: "https://dont-forget-685ba.firebaseio.com",
    storageBucket: "dont-forget-685ba.appspot.com",
    messagingSenderId: "55157607022"
  };
  firebase.initializeApp(config);

ReactDOM.render(
<Provider store={createStore(dispatch,{})}>
  <App />
</Provider>,
  document.getElementById('root')
);
