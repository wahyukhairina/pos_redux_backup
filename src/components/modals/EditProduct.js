import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { updateProduct } from '../redux/actions/product';

class UpdateProduct extends Component{
 state = {
        name: '',
        desc: '',
        image: '',
        price: '',
        category: '',
        stock: '',
        data_updated: ''
    }
 
    
   componentWillReceiveProps({products}){
       this.onSetValue(products)
    //    console.log(products)
   }

   onSetValue = (products) => {
       this.setState({
           name : products.name,
           desc : products.description,
           image : products.image,
           price : products.price,
           category : products.category,
           stock : products.stock
       }
     
       )
   }


    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeImage = (event) => {
        this.setState({
            image : event.target.files[0]
        })
    }

   
    onSubmit = async (event) => {
        event.preventDefault()

        const data = new FormData();
        data.append( "name",this.state.name);
        data.append("desc", this.state.desc);
        data.append("image",this.state.image);
        data.append("price",this.state.price);
        data.append("category",this.state.category);
        data.append("stock",this.state.stock);
        data.append("data_updated", new Date());


        const id = this.props.products.id;
        this.props.dispatch(updateProduct (id, data))
        this.props.onHide()
        }

    render(){
        // console.log(this.state.image)
        const { show, onHide, products } = this.props
        return(
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" name="name" onChange={this.onChangeValue}  value={this.state.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" value={this.state.desc} name="desc" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"></input> */}
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="Upload Image"   name="image" onChange={this.onChangeImage} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" name="price" value={this.state.price} onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Category" defaultValue={"DEFAULT"} value={this.state.category} name="category" onChange={this.onChangeValue} as="select">
                                <option value="DEFAULT" disabled>Choose..</option>
                                <option value="1">Drink</option>
                                <option value="2">Food</option>
                            </Form.Control></Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder="Enter Stock" name="stock" value={this.state.stock} onChange={this.onChangeValue} />
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



export default connect()(UpdateProduct) 