import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Home from './homeComponent'
import Menu from './menuComponenet'
import DishDetail from './dishDetailComponenet'
import Header from './headerComponent'
import Footer from './footerComponent'
import Contact from './contactComponent'
import About from "./aboutComponent"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return{
      dishes: state.dishes,
      comments: state.comments,
      promotions : state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {

  constructor(props) {
    super(props)

  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }


  render() {
    const HomePage = () => {
      return (

        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]} />

      );
    }

    const DishWithID = ({match}) => {
      return(
        <DishDetail dish = {this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />

      );}

      const AboutUs = () => {
        return(
          <About leaders = {this.props.leaders} />
        )
      }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
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

export default (withRouter(connect(mapStateToProps)(Main)));
