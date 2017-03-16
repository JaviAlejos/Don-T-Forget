import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import './index.css';

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
  <App />,
  document.getElementById('root')
);
