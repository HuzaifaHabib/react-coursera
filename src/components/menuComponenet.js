import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row } from '../../node_modules/reactstrap';


function RenderMenuItem({ dish, onClick }) {
    return (
        <div key={dish.id} className="col-12 col-md-5 mt-1" onClick={() => onClick(dish.id)}>
            <Card>
                <CardImg src={dish.image}></CardImg>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return(
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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


export default Menu;