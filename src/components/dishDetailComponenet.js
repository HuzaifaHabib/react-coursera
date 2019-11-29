import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row, Breadcrumb,BreadcrumbItem } from '../../node_modules/reactstrap';
import {Link} from 'react-router-dom'



function RenderDishDetail({ dish }) {
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

function RenderComments({ comments }) {
    if (comments == null) {
        return (<div></div>)
    }
    const cmnts = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>

        </div>
    )
}

const DishDetail = (props) => {

    const dish = props.dish
    if (dish == null) {
        return (<div></div>)
    }
    // const dishItem = this.renderDish(dish)
    // const commentItem = this.renderComments(dish.comments) 
    return (
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{dish.name}</h3>
                </div>
                </div>
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    <RenderDishDetail dish={props.dish} />
                </div>
                    <RenderComments comments={props.comments}/>
            </div>
        </div>

    )


}

export default DishDetail;