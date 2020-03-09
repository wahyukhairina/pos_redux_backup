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
 convertToRupiah(angka)
{
	var rupiah = '';		
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')+',-';
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
        const ppn = (total * 10 / 100)
        const totalppn = total + (ppn)
        return(
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Receipt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.map((cart) => 
                    <div className='row'>
                    <div className='col-md-4'>
                      <ul style={{fontWeight:'bold'}}> {cart.name} </ul>
                    </div>    
                    <div className = 'col-md-4'>
                        {cart.qty}
                    </div>
                    <div>
                        {this.convertToRupiah(cart.price)}                         
                    </div>
                    </div>
                    ) }

                    <div>
                        <div className='row'>
                        <div className='row'style={{paddingLeft:'60px'}}>
                            <div className='col-md-4'>PPN</div>
                            <div className='col-md-4' style={{paddingLeft: '50px'}}>10%</div>

                            <div className='col-md-4'>{this.convertToRupiah(ppn)}</div>
                        </div>
                        <p style={{paddingLeft:'50px'}}>--------------------------------------------------------------</p>
                        <div className='col-md-7'>
                            <ul style={{fontWeight:'bold'}}>Total</ul>   
                        </div>
                        <div className='col-md-4'>
                        <ul style={{fontWeight:'bold'}}>{this.convertToRupiah(totalppn)}</ul>
                        </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default connect()(Checkout) 