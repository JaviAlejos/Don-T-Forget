import React, { Component } from 'react';
import AppCarousel from './AppCarousel';
import AppNavBar from './AppNavBar';

class App extends Component {
  render() {
    return (
<div>
      <AppNavBar/>
      <AppCarousel/>
</div>

    );
  }
}

export default App;
