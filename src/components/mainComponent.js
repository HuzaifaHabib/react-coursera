import React, { Component } from 'react';
import Home from "./homeComponent"
import Menu from './menuComponenet'
import { DISHES } from '../shared/dishes';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DishDetail from './dishDetailComponenet'
import Header from './headerComponent'
import Footer from './footerComponent'
import {Switch , Route , Redirect} from "react-router-dom"


class Main extends Component {

  constructor(props){
    super(props)

    this.state = {
      dishes: DISHES,
      //remove for router exercise
      // selectedDish: null 
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
}
  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
        <Header />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}

        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />

        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
