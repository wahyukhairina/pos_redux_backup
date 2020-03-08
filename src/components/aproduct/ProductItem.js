import React from 'react'
import { connect } from 'react-redux'
import { addCart } from '../redux/actions/cart'

const ProductItem = ({ products, onShowDelete, onShowEdit, dispatch }) => {

  const onClickDelete = (e) => {
    e.preventDefault()
    onShowDelete(products)
  }
  const onClickEdit = (e) => {
    e.preventDefault()
    onShowEdit(products)
  }

  const onAddCart = (e) => {
    e.preventDefault()
    const product = products
    product.qty = 1
    dispatch(addCart(product))
  }

  return (
    <div className='col-md-4' key={products.id}>
      <div className='card' style={{ marginTop: '10px' }} id='card_posts'>
        <ul class='card-header' style={{ fontWeight: 'bold' }}>{products.name}</ul>
        <img className='rounded mx-auto d-block' style={{ marginTop: '3px', width: 210, height: 210 }} src={products.image} />
        <div className='card-body'>
          <h5 className='card-title'>Rp.{products.price}</h5>
          <div className='row'>
            <div className='col-md-4'>
              <span className='fa fa-shopping-cart fa-2x' onClick={onAddCart} style={{ cursor: 'pointer' }} />
            </div>
            <div className='col-md-4'>
              <span className='fa fa-pencil-square-o fa-2x' onClick={onClickEdit} style={{ color: 'black', cursor: 'pointer' }} />

            </div>
            <div className='col-md-4'>
              <a className='fa fa-trash-o fa-2x' onClick={onClickDelete} data-toggle='modal' style={{ cursor: 'pointer' }} />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect()(ProductItem)
