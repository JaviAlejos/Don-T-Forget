import React, { Component } from 'react';
import { Button,Navbar,NavItem,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import logo from '../public/Remember.png' ;

class AppNavBar extends Component {
  render() {
    return (

      <div>
        {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>*/}
          {/* My NavBar */}
        <Navbar className="App">
            <Navbar.Header>
              <img height="100%" width="70%" src={logo}  alt="logo" />
            </Navbar.Header>
            <Nav pullRight>
              <NavItem><Button bsSize="large" bsStyle="info">Sign In</Button></NavItem>
            </Nav>
            <Nav className="App">
              <NavItem> <h1 className="App"> Are you forgetting something?</h1></NavItem>
            </Nav>
        </Navbar>
</div>

);
}
}

export default AppNavBar;
