import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader, Input, Form, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { thisExpression } from '@babel/types';
import FormGroup from 'reactstrap/lib/FormGroup';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.togglenav = this.togglenav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    togglenav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    };

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password :" + this.password.value +
            "Remember :" + this.remember.checked);
        event.preventDefault();
    };

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={this.togglenav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante ConFusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"> <span className=" fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                    <Nav className="ml-auto">
                        <NavItem>
                            <button outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </button>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="userName">Username</Label>
                                <Input type="text" id="userName" name="userName" innerRef={(input) => this.username = (input)} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = (input)} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = (input)} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button color="primary" type="submit" onClick={this.handleLogin}>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;
