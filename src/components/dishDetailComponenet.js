import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row } from '../../node_modules/reactstrap';



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

    const dish = props.selectedDish
    if (dish == null) {
        return (<div></div>)
    }
    // const dishItem = this.renderDish(dish)
    // const commentItem = this.renderComments(dish.comments) 
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    <RenderDishDetail dish={props.selectedDish} />
                </div>
                    <RenderComments comments={props.selectedDish.comments}/>
            </div>
        </div>

    )


}

export default DishDetail;