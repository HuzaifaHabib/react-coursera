import React, { Component } from 'react';
import './App.css';
import Menu from './components/homeComponenet'
import { DISHES } from './shared/dishes';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar className="nav-bar">
          <NavbarBrand >Ristorante Confusion</NavbarBrand>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
