import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row } from '../../node_modules/reactstrap';
import DishDetail from './dishDetailComponenet';


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
                <div className="row " >
                    <DishDetail selectedDish={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}


export default Menu;