import React, { Component } from 'react';
import AppCarousel from './AppCarousel';
import AppNavBar from './AppNavBar';
import {connect} from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class App extends Component {

renderCarousel(){
  const { user } = this.props;
    if (!user){
        return(
          <AppCarousel/>
        );
    }else{
      return(<BigCalendar events={[]}/>);
    }

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
