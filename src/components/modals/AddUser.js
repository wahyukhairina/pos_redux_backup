import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { postUser } from '../redux/actions/user';

class AddUser extends Component{
 constructor(props) {
     super(props)
    this.state = {
        name: '',
        username: '',
        password: '',
        status: '' 
       
    }
 }
    

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    onSubmit = (event) => {
        event.preventDefault()
       this.props.dispatch(postUser(this.state));
        this.props.onHide();
    }
    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" name="name" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name="username" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name="password" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" placeholder="Enter Status" name="status" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect()(AddUser) 