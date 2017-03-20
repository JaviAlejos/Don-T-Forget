import React, { Component } from 'react';
import AppCarousel from './AppCarousel';
import AppNavBar from './AppNavBar';
import { createStore } from 'redux';

var dispatch=function (state, action) {
debugger;
  switch (action.type) {
  case 'ADD_USER':
    return {user:action.user};
  default:
    return state;
  }
}

const store = createStore(dispatch,{
    user: ""
});


class App extends Component {

constructor(){
  super();

  this.state={
      user: ""
  }

  store.subscribe(() =>
  this.setState(store.getState()));
console.log("aaaaa");
  }

renderCarousel(){

if (!store.getState().user){
return(
  <AppCarousel/>
);
}else {
  console.log("habria que borrar");
  console.log(store.getState());
}
}

render() {
    return (
<div>
      <AppNavBar store={store}/>
      {this.renderCarousel()}
</div>

    );
  }
}

export default App;
