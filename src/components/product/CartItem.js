import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQty, reduceQty, removeItem } from '../redux/actions/cart'

class CartItem extends Component {
  state = {
    total: null
  }

 addQuantity =async (cart) => {
   const initialTotal = this.props.total
   if(cart.stock >= cart.qty){
     const total = initialTotal + cart.price
     console.log(total)
     cart.total = total
   await  this.props.dispatch(addQty(cart))
    
  }
  else(
    alert('Stock unsufficient!')
  )
 }

 reduceQuantity = async (cart) => {
   const initialTotal = this.props.total
   if ( cart.qty > 1) {
    const total = initialTotal - cart.price
    cart.total = total
    await this.props.dispatch(reduceQty(cart))

    }
 }
 
 removeItem = (cart) => {
   const initialTotal = this.props.total
   const total = initialTotal - (cart.qty * cart.price)
   cart.total = total
   this.props.dispatch(removeItem(cart))
 }

  render () {
    const { cart } = this.props
    const initialTotal = this.props.total
    
    return (
      <>
     
      {cart.length !== 0 ?
      <div>
      {cart.map((cart) =>
        <div className='row' style={{border:'4px solid #efefef', marginTop:'10px'}} key={cart.id}>
          <div className='col-md-4'>
            <div><img style={{ height: '80px', width: '80px', marginLeft: '-14px' }} src={cart.image} /></div>

          </div>
          <div className='col-md-4'>
            <div className='row' style={{ marginLeft: '-15px' }}>{cart.name}</div>
            <div className='row' style={{ marginLeft: '-30px' }}>
              <div className='col-md-3'><button onClick={()=>(this.reduceQuantity(cart))}>-  </button></div>
              <div className='col-md-3' style={{ marginLeft: '10px' }}> {cart.qty} </div>
              <div className='col-md-3'><button onClick={()=>(this.addQuantity(cart))}>+</button></div>

            </div>
          </div>
          <div className='col-md-4'>
          
      <button style={{backgroundColor: '#DB7093', marginTop:'23px'}} onClick={()=>(this.removeItem(cart))}> Remove</button>
          </div>
        </div>
      )}
      <div style={{paddingTop:'10px'}} className='row'>
        <div className='col-md-8'>  Total : Rp. {initialTotal} </div>
        <div className='col-md-3'><button style={{backgroundColor: '#DB7093'}}>Checkout</button></div>
      
      </div>
      </div>
:
<div>
<img src="https://i.ibb.co/Ms8Rk6z/shopping-cart.jpg" style={{width: 250 , height: 250 }} alt="empty-cart" border="0"></img>
<ul style={{ marginLeft: '50px'}}>Your cart is empty</ul>
</div>
}
      </>
    )
  }
}
const mapStateToProps = (state) => {

    return {
      cart: state.cart.cart,
      total : state.cart.total
    }
  }
export default connect(mapStateToProps)(CartItem)
