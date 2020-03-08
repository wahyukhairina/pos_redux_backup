import React, { Component, Fragment } from 'react'
import ProductItem from './ProductItem'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'
import AddProduct from '../modals/AddProduct'
import Cart from './Cart'
import { searchProduct, sortProduct } from '../redux/actions/product'
import { connect } from 'react-redux'

class Product extends Component {

  state = {
    show : false, 
    cart : []
  }

  onShow = (e) => {
    this.setState({
        show: true
    })
} 

  onHandleClose = () => {
    this.setState({
        show: false
    })
} 

onChangeSearch = (e) => {

  // console.log(e.target.value)
  this.props.dispatch(searchProduct(e.target.value))
}

onClickSort = (e) => {
  // console.log(e.target.value)
  this.props.dispatch(sortProduct(e.target.value))
}

  render () {
    const { cart } = this.state
    return (
     <>
        <div className='row'>
          <div className='col-md-9'>
            <Navbar />
            <div className='row'>
              <div className='col-md-1'>
                <Sidebar />
              </div>
              <div className='col-md-11'>
              <div className="row">
                <div className='col-md-6'>
                    <nav class="navbar navbar-light bg-light">
                    <input className='form-control mr-sm-2' type='search' placeholder='Search' onChange={this.onChangeSearch} aria-label='Search' />
                    </nav>
                </div>
                <div className='col-md-6'>
                  <h5>SORT PRICE : <button value='ASC' onClick={this.onClickSort} > Shortest</button> | <button value='DESC' onClick={this.onClickSort} >Highest</button> </h5>
                  
                </div>
              </div>
                <div className='row'>
                  <ProductItem  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
    ini cart
    <Cart />
          </div>
        </div>
        <div className='row'>
          <a onClick={this.onShow} title='Add Product' style={{ marginTop: '10px', marginLeft: '800px', color: 'grey' }} className='fa fa-plus fa-2x' href='#' />
        </div>
        <AddProduct show={this.state.show} onHandleClose={this.onHandleClose} />
        
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps)(Product)

