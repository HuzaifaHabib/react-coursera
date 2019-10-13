import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row } from '../../node_modules/reactstrap';




class Menu extends Component {


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1" onClick={() => this.props.onClick(dish.id)}>
                    <Card>

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
            </div>
        );
    }
}


export default Menu;