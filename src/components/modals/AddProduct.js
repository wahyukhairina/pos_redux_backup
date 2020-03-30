import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getCategory } from '../redux/actions/category'
import { connect } from 'react-redux';
import { postProduct } from '../redux/actions/product';

class AddProduct extends Component{
 constructor(props) {
     super(props)
    this.state = {
        name: '',
        desc: '',
        photo: '',
        price: '',
        category: '',
        stock: '',
        data_added: '',
        data_updated: ''
    }
 }
    
    componentDidMount (){
        this.props.dispatch(getCategory())
    }

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangePhoto = (event) => {
        this.setState({
            photo : event.target.files[0]
        })
    }

  
    onSubmit = (event) => {
        event.preventDefault()
    
        const data = new FormData()
        data.append( "name",this.state.name);
        data.append("desc", this.state.desc);
        data.append("image",this.state.photo);
        data.append("price",this.state.price);
        data.append("category",this.state.category);
        data.append("stock",this.state.stock);
        data.append("data_added", new Date());
        data.append("data_updated", new Date());
      
       this.props.dispatch(postProduct(data));
        this.props.onHide();
    }
    render(){
        const { category } = this.props;
        console.log('cat', this.state)
        return(
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" name="name" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="desc" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="Upload Image" name="photo" onChange={this.onChangePhoto} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" name="price"  onChange={this.onChangeValue} />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Category" defaultValue={"DEFAULT"} name="category" onChange={this.onChangeValue} as="select">
                        <option selected value={0} disabled>
                        Choose...
                      </option>
                      {category.map((category, index) => (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                            </Form.Control></Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder="Enter Stock" name="stock" onChange={this.onChangeValue} />
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


const mapStateToProps = state => {
    return{
      category: state.category.category
    }
  }

export default connect(mapStateToProps)(AddProduct) 