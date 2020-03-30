import React, { Component } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

class Cart extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  render () {
   

    return (
      <>        
          <CartItem />

      </>
    )
  }
}

// const mapStateToProps = (state) => {

//   return {
//     cart: state.cart.cart
//   }
// }
export default connect()(Cart)
