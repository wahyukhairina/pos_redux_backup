import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts, paginationProduct } from '../redux/actions/product'

import { addCart } from '../redux/actions/cart'
import DeleteProduct from '../modals/DeleteProduct'
import EditProduct from '../modals/EditProduct'


class ProductItem extends Component {
  state = {
    show : false,
    update : false,
   data: null,
   edited: null,
   searchName: ''
    
  }

  onAddChart = (product) => {
    
    product.qty = 1 
    this.props.dispatch(addCart(product))
  }

  getProducts () {
    this.props.dispatch(getProducts())
  }

  componentDidMount () {
    this.getProducts()
  }

  onShowDelete = (products) => {
    
    this.setState({
       data: products,
        show: true
    })
} 

  onHandleClose = () => {
    this.setState({
        show: false
    })
} 

onShowUpdate = (products) => {
    
  this.setState({
     edited: products,
      update: true
  })
} 

onUpdateClose = () => {
  this.setState({
      update: false
  })
} 

paginateProduct = (event) => {
  this.props.dispatch(paginationProduct(event.target.id))
}




  render () {
    
    const { products, pagination } = this.props

    return (
      <>
      
        {products.map((products) =>
          <div className='col-md-4' key={products.id}>
            <div className='card' style={{ marginTop: '10px' }} id='card_posts'>
              <ul class='card-header' style={{ fontWeight: 'bold' }}>{products.name}</ul>
              <img className='rounded mx-auto d-block' style={{ marginTop: '3px', width: 210, height: 210 }} src={products.image} />
              <div className='card-body'>
                <h5 className='card-title'>Rp.{products.price}</h5>
                <div className='row'>
                  <div className='col-md-4'>
                    <span className='fa fa-shopping-cart fa-2x' onClick={()=>(this.onAddChart(products))} style={{ cursor: 'pointer' }} />
                  </div>
                  <div className='col-md-4'> 
                    <span className='fa fa-pencil-square-o fa-2x' onClick={()=>(this.onShowUpdate(products))} style={{ color: 'black', cursor: 'pointer'  }} />
                  
                  </div>
                  <div className='col-md-4'>
                    <a className='fa fa-trash-o fa-2x' onClick={()=>(this.onShowDelete(products))} data-toggle='modal' style={{ cursor: 'pointer' }}></a> 
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <ul className="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {pagination.map((pagination) => (
                                <li class="page-item" key={pagination}><a class="page-link" onClick={this.paginateProduct} id={pagination}>{pagination}</a></li>
                            ))}
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
          <DeleteProduct show={this.state.show} onHide={this.onHandleClose} data={this.state.data} />
          <EditProduct show={this.state.update} onHide={this.onUpdateClose} data={this.state.edited} />
      </>
      

    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    cart: state.cart.cart,
    pagination: state.products.pagination
  }
}

export default connect(mapStateToProps)(ProductItem)
