import React, { Component } from 'react';
import AppCarousel from './AppCarousel';
import AppNavBar from './AppNavBar';
import AppCalendar from './AppCalendar';
import AppThumbnaiList from './AppThumbnaiList';
import {connect} from 'react-redux';



class App extends Component {

constructor(){
  super();
  this.state={pag:""};
  this.refreshState=this.refreshState.bind(this);
}

refreshState(pag){
  this.setState({pag});
}


renderApp(){
  const { user } = this.props;

    if (!user)
        return(<AppCarousel/>);
    else{

      switch (this.state.pag) {
      case 'passwords':
        return <AppThumbnaiList/>;
      case 'birthdays':
        return;
      case 'shopping':
        return;
      case 'contact':
        return;
      default:
        return(<AppCalendar/>);
      }

    }

}

render() {
    return (
<div>
      <AppNavBar refreshState={this.refreshState} now={this.state.pag}/>
      {this.renderApp()}
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
