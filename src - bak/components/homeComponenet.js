import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row } from '../../node_modules/reactstrap';



class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log("Menu Componenet Constructor invoked")
    }

    componentDidMount() {
        console.log("Menu Componenet componentDidMount invoked")
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg src={dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelect(dish)}>

                        <CardImg src={dish.image}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>


                    {/* <li>{dish.name}</li>
                    <img src={dish.image} alt={dish.name}></img>
                    <li>{dish.description}</li>
                    <h1>Price is {dish.price} $</h1> */}
                </div>
            );
        }
        );
        
        console.log("Menu Componenet render invoked")


        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}


export default Menu;