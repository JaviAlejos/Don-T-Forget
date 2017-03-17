import React, { Component } from 'react';
import { Button,Navbar,NavItem,Nav,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import logo from '../public/Remember.png' ;
import caritem1 from '../public/Remember-birthday.jpg' ;
import caritem2 from '../public/Remember-pass.jpg' ;

class App extends Component {
  render() {
    return (
<div>
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
              <NavItem> <h1 className="App"> Don't Forget - Remind is your power</h1></NavItem>
            </Nav>
        </Navbar>
</div>
        {/* My Carousel */}
 <div>
        <Carousel>
            <Carousel.Item>
              <img width={1050} height={300} alt="1050x300" src={caritem1}/>
              <Carousel.Caption>
                <h3>Do you usually forget birthdays?</h3>
                <p>This is your Website!!!!</p>
              </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
              <img width={1050} height={300} alt="1050x300" src={caritem2}/>
              <Carousel.Caption>
                <h3>Do you usually forget your passwords?</h3>
                <p>This is your Website!!!!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={350} height={300} alt="350x300" src="/assets/carousel.png"/>
              <Carousel.Caption>
                <h3>Do you usually forget buy something?</h3>
                <p>This is your Website!!!!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>

</div>

    );
  }
}

export default App;
