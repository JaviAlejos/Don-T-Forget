import React, {Component} from 'react';
import {NavItem, Nav,ButtonToolbar,Dropdown,MenuItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';

class AppMenu extends Component {

    render() {
        return (
              <Nav>
                        <NavItem>

                          <ButtonToolbar>
                              <Dropdown id="dropdown-custom-1">
                                <Dropdown.Toggle bsStyle="success">
                                  Memory
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <MenuItem eventKey="1">PassWords</MenuItem>
                                  <MenuItem eventKey="2">Birthdays</MenuItem>
                                  <MenuItem eventKey="3">Shopping List</MenuItem>
                                  {/*<MenuItem eventKey="3" active>Shopping List</MenuItem>*/}
                                  <MenuItem divider />
                                  <MenuItem eventKey="4">Contact Us</MenuItem>
                                </Dropdown.Menu>
                              </Dropdown>
                              </ButtonToolbar>

                          </NavItem>
                    </Nav>
        );
    }
}

export default AppMenu;
