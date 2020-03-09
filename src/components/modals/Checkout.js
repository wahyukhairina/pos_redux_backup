import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';


class Checkout extends Component{
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


    // onSubmit = (event) => {
    //     event.preventDefault()
    //    this.props.dispatch(postCategory(this.state));
    //     this.props.onHide();
    // }
    render(){
        const { cart } = this.props
        const { total }  = this.props
    
        return(
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Receipt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.map((cart) => 
                    <div className='row'>
                    <div className='col-md-4'>
                      <ul> {cart.name} </ul>
                    </div>    
                    <div className = 'col-md-4'>
                        {cart.qty}
                    </div>
                    <div>
                       Rp. {cart.price}                         
                    </div>
                    </div>
                    ) }

                    <div>
                        Total : Rp. {total}
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect()(Checkout) 