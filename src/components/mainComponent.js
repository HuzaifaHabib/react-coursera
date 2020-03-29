import React, { Component } from 'react'
import Home from './homeComponent'
import Menu from './menuComponenet'
import DishDetail from './dishDetailComponenet'
import Header from './headerComponent'
import Footer from './footerComponent'
import Contact from './contactComponent'
import About from "./aboutComponent"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import {connect} from 'react-redux'
import {postFeedback,postComments, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../Redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const mapDispatchToProps = dispatch => ({
    postComments: (dsihId, rating, author, comment) => dispatch(postComments(dsihId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders:() => {dispatch(fetchLeaders())},
    postFeedback:(firstname, lastname, telnum, email, agree, contactType, message) => postFeedback(firstname, lastname, telnum, email, agree, contactType, message)
});


const mapStateToProps = state => {
    return{
      dishes: state.dishes,
      comments: state.comments,
      promotions : state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();

  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }


  render() {
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrmess = {this.props.dishes.errmess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading = {this.props.promotions.isLoading}
          promosErrmess = {this.props.promotions.errmess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading = {this.props.leaders.isLoading}
          leadersErrmess = {this.props.leaders.errmess}
           />

      );
    }

    const DishWithID = ({match}) => {
      return(
        <DishDetail dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isloading = {this.props.dishes.isLoading}
          errmess = {this.props.dishes.errmess}
          comments = {this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrmess = {this.props.comments.errmess}
          postComments = {this.props.postComments}
          />
          
      );}



      const AboutUs = () => {
        return(
          <About leaders = {this.props.leaders} />
        )
      }

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path="/contactus" component={() => <Contact postFeedback = {this.props.postFeedback} resetFeedbackForm = {this.props.resetFeedbackForm}/> } />
          <Route path="/menu/:dishId" component={DishWithID} />
          <Route path='/aboutus' component={AboutUs} />
          {/* <Route path='/hero' component={Hero} /> */}
          <Redirect to="/home" />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

