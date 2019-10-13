import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row } from '../../node_modules/reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props)
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

        return (
            <div className="row">
                <Card>
                    <CardImg src={dish.image}></CardImg>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )



    }
}

export default DishDetail;