import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQty, reduceQty, removeItem } from '../redux/actions/cart'

class CartItem extends Component {
  

 addQuantity = (cart) => {
   if(cart.stock > cart.qty){
    this.props.dispatch(addQty(cart.id))
  }
  else(
    alert('Stock unsufficient!')
  )
 }

 componentWillReceiveProps (){
     console.log('will receive props')
 }

 reduceQuantity = (id, qty) => {
   if ( qty > 1) {
    this.props.dispatch(reduceQty(id))
    }
 }
 
 removeItem = (id) => {
   this.props.dispatch(removeItem(id))
 }

  render () {
    const { cart } = this.props
    return (
      <>
     

      {cart.map((cart) =>
        <div className='row' style={{border:'4px solid #efefef', marginTop:'10px'}} key={cart.id}>
          <div className='col-md-4'>
            <div><img style={{ height: '80px', width: '80px', marginLeft: '-14px' }} src={cart.image} /></div>

          </div>
          <div className='col-md-4'>
            <div className='row' style={{ marginLeft: '-15px' }}>{cart.name}</div>
            <div className='row' style={{ marginLeft: '-30px' }}>
              <div className='col-md-3'><button onClick={()=>(this.reduceQuantity(cart.id, cart.qty))}>-  </button></div>
              <div className='col-md-3' style={{ marginLeft: '10px' }}> {cart.qty} </div>
              <div className='col-md-3'><button onClick={()=>(this.addQuantity(cart))}>+</button></div>

            </div>
          </div>
          <div className='col-md-4'>
          
      <button style={{backgroundColor: '#DB7093', marginTop:'23px'}} onClick={()=>(this.removeItem(cart.id))}> Remove</button>
          </div>
        </div>
      )}
   
      </>
    )
  }
}
const mapStateToProps = (state) => {

    return {
      cart: state.cart.cart
    }
  }
export default connect(mapStateToProps)(CartItem)
