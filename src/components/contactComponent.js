import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Input, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Control, Form, Errors, actions } from 'react-redux-form'


//Validation thru redux form

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);
        // this.resetForm = this.resetForm.bind(this)
    }

    // resetForm() {
    //     this.setState({
    //         firstname: "",
    //         lastname: "",
    //         telnum: "",
    //         email: "",
    //         agree: "",
    //         contactType: "",
    //         message: ""
    //     })
    // }

    handleSubmit(values) {
        console.log("The Current State is " + JSON.stringify(values));
        alert("The Current State is " + JSON.stringify(values));
        this.props.resetFeedbackForm();

    }


    // validate(firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname: "",
    //         lastname: "",
    //         telnum: "",
    //         email: "",
    //     };

    //     if (this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname = "First Name Should be >=3";
    //     else if (this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname = "First Name Should be <= 10";

    //     if (this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname = "First Name Should be >=3";
    //     else if (this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname = "First Name Should be <= 10";

    //     const reg = /^\d+$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = "Tel. Number should only contain Numbers";

    //     if (this.state.touched.email && email.split('').filter(x => x === "@").length !== 1)
    //         errors.email = "Email should contain a @"

    //     return errors;
    // }
    // Commented for changing to redux form

    render() {
        // Commented for redux form
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to='/contactus'>Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name='firstname' id="firstname" placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minlength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minlength: " Must be greater than 2 character",
                                            maxLength: " Must be less than 15 charecters or less"
                                        }}

                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name='lastname' id="lastname" placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minlength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minlength: " Must be greater than 2 character",
                                            maxLength: " Must be less than 15 charecters or less"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name='telnum' id="telnum" placeholder="Phone Number"
                                        className="form-control"
                                        validators={{
                                            required, minlength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: " Required",
                                            minlength: " Must be greater than 2 Numbers",
                                            maxLength: " Must be less than 15 charecters or less",
                                            isNumber : " Must be a number"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="Email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name='email' id="email" placeholder="Email ID"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            validEmail : "Invalid Email Address"
                                        }}
                                        />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check" check>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check"
                                            /> {" "}
                                            <strong>May We Contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="Feedback" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" name='message' id="message" placeholder="Email ID" rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                            {/* <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button onClick={this.resetForm} color="primary" danger>
                                        Reset Form
                                    </Button>
                                </Col>
                            </FormGroup> */}

                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;