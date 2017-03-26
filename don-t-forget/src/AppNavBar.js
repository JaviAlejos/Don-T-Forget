import React, {Component} from 'react';
import {Button, Navbar, NavItem, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import logo from '../public/Remember.png';
import firebase from 'firebase';
import {connect} from 'react-redux';

class AppNavBar extends Component {

    constructor() {
        super();
        this.logout=this.logout.bind(this);
    }

    login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => console.log(`${result.user.email} ha iniciado sesión`)).catch(error => console.log(`error ${error.code}:${error.message}`));
    }

    logout() {
        const { addUser } = this.props;
        firebase.auth().signOut().then(result => console.log(`${result.user.email} ha cerrado sesión`)).catch(error => console.log(`${error.code}:${error.message}`));
        addUser("");
    }

    componentWillMount() {
      const { addUser } = this.props;
        firebase.auth().onAuthStateChanged(user => {
          if (user!=null)
            addUser(user);
        });
    }

    renderButton() {
      const { user } = this.props;
        if (user) {
            return (
                <Button bsSize="large" bsStyle="info" onClick={this.logout}>Sign Out</Button>
            );

        } else {
            return (
                <Button bsSize="large" bsStyle="info" onClick={this.login}>Sign In</Button>
            );
        }

    }

    render() {
        return (

            <div>
                {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>*/}
                {/* My NavBar */}
                <Navbar className="App">
                    <Navbar.Header>
                        <img height="100%" width="70%" src={logo} alt="logo"/>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem>
                            {this.renderButton()}
                        </NavItem>
                    </Nav>
                    <Nav className="App">
                        <NavItem>
                            <h1 className="App">
                                Are you forgetting something?</h1>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>

        );
    }
}

var mapStateToProps=function(state) {
  return {
    user:state.user
  }
}


var mapDispatchToProps = function(dispatch) {
  return {
    addUser: function(user) {
      dispatch({
        type: 'ADD_USER',
        user
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppNavBar);
