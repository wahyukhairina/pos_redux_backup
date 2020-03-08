import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts, searchProduct, sortProduct, paginationProduct } from '../redux/actions/product'
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'
import ProductItem from './ProductItem'
import DeleteProduct from '../modals/DeleteProduct'
import EditProduct from '../modals/EditProduct'
import AddProduct from '../modals/AddProduct'
import Chart from '../product/CartItem'
import CartItem from '../product/CartItem'

class Product extends Component {
state = {
    showDelete: false,
    dataDelete: null,
    showEdit: false,
    dataEdit: null,
    addshow: false
}
    componentDidMount(){
        this.getAllProducts()
    }

    getAllProducts = async() => {
      
        await this.props.dispatch(getProducts())
    }
    paginateProduct = (event) => {
        this.props.dispatch(paginationProduct(event.target.id))
      }

    onShowDelete = (products) => {
    
        this.setState({
           dataDelete: products,
            showDelete: true
        })
    } 
    onShowEdit = (products) => {
    
        this.setState({
           dataEdit: products,
            showEdit: true
        })
    } 
    
      onHandleClose = () => {
        this.setState({
            showDelete: false
        })
    } 

    onEditClose = () => {
        this.setState({
            showEdit: false
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
      addShow = (e) => {
        this.setState({
            addshow: true
        })
    } 
    
      addClose = () => {
        this.setState({
            addshow: false
        })
    } 

    render ()
    {
        const { products,pagination } = this.props
        console.log(pagination)
        const ItemProduct = products.map((products) => 
        <ProductItem products={ products } key={products.id} onShowDelete={this.onShowDelete } onShowEdit={this.onShowEdit}/>
        ) 
        return (
            <>

            <div className='row'>
                <div className='col-md-8'>
                    
                        <div className='col-md-12'>
                        <Navbar />
                        </div>
                      
                    
                    <div className='row'>
                        <div className='col-md-1'>
                            <Sidebar />
                        </div>
                        <div className='col-md-11'>
                            <div className='row'>
                                <div className='col-md-4'>
                                <nav class="navbar navbar-light bg-light">
                    <input className='form-control mr-sm-2' type='search' placeholder='Search' onChange={this.onChangeSearch} aria-label='Search' />
                    </nav>
                                </div>
                                <div className='col-md-7'>
                                </div>
                                <div className='col-md-1'>
                                <a onClick={this.addShow} title='Add Product' style={{ marginTop: '10px', marginLeft: '8px', color: 'grey' }} className='fa fa-plus fa-2x' href='#' />
                                </div>
                            </div>
                            <div className='row'>
                            {ItemProduct}
                            </div>
                            <div className='row'>
                            <div className='col-md-6'>
                            <ul className="pagination" style={{marginTop:'10px'}}>
                            <li class="page-item"><a class="page-link" style={{color:'#848484'}} >Previous</a></li>
                            {pagination.map((pagination) => (
                                <li class="page-item" key={pagination}><a class="page-link" onClick={this.paginateProduct} id={pagination}>{pagination}</a></li>
                            ))}
                            <li class="page-item"><a class="page-link" style={{color:'#848484'}} href="#">Next</a></li>
                        </ul>
                        </div>
                        <div className='col-md-6'>
                       <ul style={{marginTop:'10px', marginLeft:'60px'}}> <h7 style={{color:'grey'}} >SORT PRICE : <button className="btn btn" style={{background:"#DB7093", color:'#e9e9e9'}} value='ASC' onClick={this.onClickSort} > Shortest</button> | <button className="btn btn" style={{background:"#DB7093", color: 'white'}} value='DESC' onClick={this.onClickSort} >Highest</button> </h7></ul>
                                
                        </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <h2 style={{color:'grey', marginTop:'20px', marginBottom:'70px'}}>Cart</h2>
                    <CartItem/>
                </div>
            </div>
            <DeleteProduct show={this.state.showDelete} onHide={this.onHandleClose} products={this.state.dataDelete}/>
            <EditProduct show={this.state.showEdit} onHide={this.onEditClose} products={this.state.dataEdit}/>
            <AddProduct show={this.state.addshow} onHide={this.addClose} />

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        pagination: state.products.pagination
    }
}
export default connect(mapStateToProps)(Product)