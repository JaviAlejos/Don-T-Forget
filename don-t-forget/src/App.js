import React, { Component } from 'react';
import AppCarousel from './AppCarousel';
import AppNavBar from './AppNavBar';
import AppCalendar from './AppCalendar';
import {connect} from 'react-redux';

class App extends Component {

renderCarousel(){
  const { user } = this.props;

    if (!user)
        return(<AppCarousel/>);
    else
      return(<AppCalendar/>);
}

render() {
    return (
<div>
      <AppNavBar/>
      {this.renderCarousel()}
</div>

    );
  }
}

var mapStateToProps=function(state) {
  return {
    user:state.user
  }
}



export default connect(mapStateToProps)(App);
