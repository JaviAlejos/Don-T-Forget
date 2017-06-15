import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';


var user= function (state=null, action) {
  switch (action.type) {
  case 'ADD_USER':
    return {user:action.user};
  case 'DELETE_USER':
      return null;
  default:
    return state;
  }
}

var events=function (state=[], action) {
  switch (action.type) {
  case 'ADD_EVENT':
    return state.concat([ action.event ]);
  case 'DELETE_EVENT':
    return state.filter(event => event.idEvent!=action.event.idEvent); //también se puede con splice
  case 'DELETE_EVENTS':
    return [];
  default:
    return state;
  }
}



var passwords=function (state=[], action) {
  debugger;
  switch (action.type) {
  case 'ADD_PASSWORD':
      const exist = state.findIndex(pass => pass.namePass === action.password.namePass);
      if(exist<0)
        return state.concat([ action.password ]);
        else
          return state;
  case 'DELETE_PASSWORD':
    return state.filter(pass => pass.namePass!=action.password.namePass);

  case 'DELETE_PASSWORDS':
    return [];
  default:
    return state;
  }
}


var dispatch=combineReducers({
  user,
  events,
  passwords
})

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
<Provider store={createStore(dispatch)}>
  <App />
</Provider>,
  document.getElementById('root')
);
