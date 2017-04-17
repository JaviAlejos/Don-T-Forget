import React, {Component} from 'react';
import {NavItem, Nav,ButtonToolbar,Dropdown,MenuItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';

class AppMenu extends Component {

onCickEvent(pag){
  debugger;
const {refreshState}=this.props;
refreshState(pag);

}


renderMenuItem(){
  const {now } = this.props;

  switch (now) {
  case 'passwords':
    return (
      <Dropdown.Menu>
        <MenuItem eventKey="1" onClick={()=>this.onCickEvent("")}>Calendar</MenuItem>
        <MenuItem eventKey="2" active onClick={()=>this.onCickEvent("passwords")}>PassWords</MenuItem>
        <MenuItem eventKey="3" onClick={()=>this.onCickEvent("birthdays")}>Birthdays</MenuItem>
        <MenuItem eventKey="4" onClick={()=>this.onCickEvent("shopping")}>Shopping List</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="5" onClick={()=>this.onCickEvent("contact")}>Contact Us</MenuItem>
      </Dropdown.Menu>
    );
  case 'birthdays':
    return (
      <Dropdown.Menu>
        <MenuItem eventKey="1" onClick={()=>this.onCickEvent("")}>Calendar</MenuItem>
        <MenuItem eventKey="2" onClick={()=>this.onCickEvent("passwords")}>PassWords</MenuItem>
        <MenuItem eventKey="3" active onClick={()=>this.onCickEvent("birthdays")}>Birthdays</MenuItem>
        <MenuItem eventKey="4" onClick={()=>this.onCickEvent("shopping")}>Shopping List</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="5" onClick={()=>this.onCickEvent("contact")}>Contact Us</MenuItem>
      </Dropdown.Menu>
    );
  case 'shopping':
    return(
      <Dropdown.Menu>
        <MenuItem eventKey="1" onClick={()=>this.onCickEvent("")}>Calendar</MenuItem>
        <MenuItem eventKey="2" onClick={()=>this.onCickEvent("passwords")}>PassWords</MenuItem>
        <MenuItem eventKey="3" onClick={()=>this.onCickEvent("birthdays")}>Birthdays</MenuItem>
        <MenuItem eventKey="4" active onClick={()=>this.onCickEvent("shopping")}>Shopping List</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="5" onClick={()=>this.onCickEvent("contact")}>Contact Us</MenuItem>
      </Dropdown.Menu>
    );
  case 'contact':
    return(
      <Dropdown.Menu>
        <MenuItem eventKey="1" onClick={()=>this.onCickEvent("")}>Calendar</MenuItem>
        <MenuItem eventKey="2" onClick={()=>this.onCickEvent("passwords")}>PassWords</MenuItem>
        <MenuItem eventKey="3" onClick={()=>this.onCickEvent("birthdays")}>Birthdays</MenuItem>
        <MenuItem eventKey="4" onClick={()=>this.onCickEvent("shopping")}>Shopping List</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="5" active onClick={()=>this.onCickEvent("contact")}>Contact Us</MenuItem>
      </Dropdown.Menu>
    );
  default:
    return(
    <Dropdown.Menu>
      <MenuItem eventKey="1" active onClick={()=>this.onCickEvent("")}>Calendar</MenuItem>
      <MenuItem eventKey="2" onClick={()=>this.onCickEvent("passwords")}>PassWords</MenuItem>
      <MenuItem eventKey="3" onClick={()=>this.onCickEvent("birthdays")}>Birthdays</MenuItem>
      <MenuItem eventKey="4" onClick={()=>this.onCickEvent("shopping")}>Shopping List</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="5" onClick={()=>this.onCickEvent("contact")}>Contact Us</MenuItem>
    </Dropdown.Menu>
);

  }
}


    render() {
      return (
              <Nav>
                        <NavItem>

                          <ButtonToolbar>
                              <Dropdown id="dropdown-custom-1">
                                <Dropdown.Toggle bsStyle="success">
                                  Memory
                                </Dropdown.Toggle>

                                    {this.renderMenuItem()}

                              </Dropdown>
                              </ButtonToolbar>

                          </NavItem>
                    </Nav>
        );
    }
}

export default AppMenu;
