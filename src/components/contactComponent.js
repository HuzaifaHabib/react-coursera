import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: "",
            contactType: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name;

        this.setState({
            [name] :value
        })
    }

    handleSubmit(event) {
        console.log("The Current State is " + JSON.stringify(this.state));
        alert("The Current State is " + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name='firstname' id="firstname" placeholder="First Name" value={this.state.firstname}
                                    onChange={this.handleInputChange}
                                    ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name='lastname' id="lastname" placeholder="Last Name" value={this.state.lastname}
                                    onChange={this.handleInputChange}
                                    ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input type="tel" name='telnum' id="telnum" placeholder="Phone Number" value={this.state.telnum}
                                    onChange={this.handleInputChange}
                                    ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="Email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" name='email' id="firstemail" placeholder="Email ID" value={this.state.email}
                                    onChange={this.handleInputChange}
                                    ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" value={this.state.agree} 
                                        onChange={this.handleInputChange}
                                        /> {" "}
                                        <strong>May We Contact you?</strong>
                                    </Label>
                                </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                <Input type="select" name="contactType" value={this.state.contactType}
                                onChange={this.handleInputChange}
                                >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="Feedback" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name='message' id="message" placeholder="Email ID" value={this.state.message} rows="12"
                                    onChange={this.handleInputChange}
                                    ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;