import React, { Component } from 'react';
import Home from "./homeComponent"
import Menu from './menuComponenet'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DishDetail from './dishDetailComponenet'
import Header from './headerComponent'
import Footer from './footerComponent'
import Contact from './contactComponent'
import About from "./aboutComponent"
import { COMMENTS } from "../shared/comments"
import { DISHES } from "../shared/dishes"
import { LEADERS } from "../shared/leaders"
import { PROMOTIONS } from "../shared/promotions"
import { Switch, Route, Redirect } from "react-router-dom"



class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS,
      //remove for router exercise
      // selectedDish: null 
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }


  render() {
    const HomePage = () => {
      return (

        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} />

      );
    }

    const DishWithID = ({match}) => {
      return(
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />

      );}

      const AboutUs = () => {
        return(
          <About leaders = {this.state.leaders} />
        )
      }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/menu/:dishId" component={DishWithID} />
          <Route path='/aboutus' component={AboutUs} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
