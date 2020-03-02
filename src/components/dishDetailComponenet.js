import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row, Label, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, FormGroup } from '../../node_modules/reactstrap';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form'
import Col from 'reactstrap/lib/Col';
import Loading from './loadingComponent'
import { baseUrl } from '../shared/baseurl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components'


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    };

    handleSubmit(values) {
        this.toggleModal();
        // alert(JSON.stringify(values));
        this.props.postComments(this.props.dishId, values.rating, values.authorname, values.comment)

    };

    render() {
        return (
            <>
                <div>
                    <Button onClick={this.toggleModal} outline >
                        <span className="fa fa-comments fa-lg"></span> Submit Comment
                </Button>
                </div>
                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup>
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model=".rating" name="rating" v className="form-control" >

                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>

                                        </Control.select>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="authorname" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".authorname"
                                            name="authorname"
                                            id="authorname"
                                            className="form-control"
                                            validators={{
                                                minlength: minLength(3), maxLength: maxLength(15)
                                            }}

                                        ></Control.text>
                                        <Errors
                                            className="text-danger"
                                            model=".authorname"
                                            show="touched"
                                            messages={{
                                                minlength: " Must be greater than 2 Characters",
                                                maxLength: " Must be atleast 15 charecters or less",
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".comment" name='comment' id="comment" placeholder="Your Message Here" rows="6"
                                            className="form-control"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col md={10}>
                                        <Button color="primary" type="submit" >Submit</Button>
                                    </Col>
                                </FormGroup>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </>
        );

    }
}

function RenderDishDetail({ dish }) {
    if (dish != null) {
        return (
            <FadeTransform in
                transformProps={{
                    exittransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}


function RenderComments({ comments, postComments, dishId }) {
    if (comments == null) {
        return (<div></div>)
    }
    console.log(dishId)
    const cmnts = comments.map((comment) => {
        return (
            <Fade in>
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
            </Fade>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                <Stagger in>
                    {cmnts}
                </Stagger>
            </ul>
            <CommentForm dishId={dishId} postComments={postComments} />

        </div>
    )
}

const DishDetail = (props) => {
    console.log(props)
    if (props.isloading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errmess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errmess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        <RenderDishDetail dish={props.dish} />
                    </div>
                    <RenderComments comments={props.comments}
                        postComments={props.postComments}
                        dishId={props.dish.id}
                    />

                </div>
            </div>

        )
    }


}

export default DishDetail;