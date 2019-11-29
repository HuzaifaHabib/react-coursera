import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row, Breadcrumb, BreadcrumbItem } from '../../node_modules/reactstrap';
import { Link } from 'react-router-dom'

function RenderMenuItem({ dish}) {
    return (
        <div key={dish.id} className="col-12 col-md-5 mt-1">
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg src={dish.image}></CardImg>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <RenderMenuItem dish={dish} />
        );
    }
    );

    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Menu</h3>
                </div>
            </div>
            <div className='row'>
                {menu}
            </div>
        </div>
    );
}


export default Menu;