import React, { Component } from 'react';
import Menu from './homeComponenet'
import { DISHES } from '../shared/dishes';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DishDetail from './dishDetailComponenet'


class Main extends Component {

  constructor(props){
    super(props)

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
}
  render() {
    return (
      <div>
        <Navbar dark color="primary" className="nav-bar">
          <NavbarBrand >Ristorante Con Fusion </NavbarBrand>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
