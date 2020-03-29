import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle,Breadcrumb, BreadcrumbItem } from '../../node_modules/reactstrap';
import { Link } from 'react-router-dom'
import Loading  from './loadingComponent'
import {baseUrl} from '../shared/baseurl'


function RenderMenuItem({ dish }) {
    return (
        <div key={dish.id} className="col-12 col-md-5 mt-1">
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg src={baseUrl + dish.image}></CardImg>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    );
}

const Menu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <RenderMenuItem dish={dish} key={dish.id} />
        );
    }
    );
    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }

    else if (props.dishes.errmess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errmess}</h4>
                </div>
            </div>
        )
    }

    else
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