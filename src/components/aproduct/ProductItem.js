/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { addCart } from '../redux/actions/cart'

const ProductItem = ({ products, onShowDelete, onShowEdit, dispatch, total, cart }) => {
  const onClickDelete = (e) => {
    e.preventDefault()
    onShowDelete(products)
  }
  const onClickEdit = (e) => {
    e.preventDefault()
    onShowEdit(products)
  }

  const convertToRupiah = (angka) => {
    var rupiah = ''
    var angkarev = angka.toString().split('').reverse().join('')
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
  }

  const onAddCart = (e) => {
    let i
    cart.map(cart => {
      if (cart.id === products.id) {
        i = 0
        return alert('Product have been added')
      }
      return products
    })

    if (i !== 0) {
      const InitialTotal = total
      e.preventDefault()
      const product = products
      product.qty = 1
      product.total = InitialTotal + product.price
      dispatch(addCart(product))
    }
  }

  return (
    <div className='col-md-4' key={products.id}>
      <div className='card' style={{ marginTop: '10px' }} id='card_posts'>
        <ul class='card-header' style={{ fontWeight: 'bold' }}>{products.name}</ul>
        <img className='rounded mx-auto d-block' style={{ marginTop: '3px', width: 210, height: 210 }} src={products.image} />
        <div className='card-body'>
          <h5 className='card-title'>{convertToRupiah(products.price)}</h5>
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
const mapStateToProps = (state) => {
  return {
    total: state.cart.total,
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(ProductItem)
