const initialState = {
  cart: []
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
        const newCart = [...state.cart, action.payload] 
      return {
        ...state,
        cart: newCart
      }

    case 'ADD_QTY':
      const newQtyCart = state.cart.map(cart => {
        if (cart.id === action.payload) {
          cart.qty = cart.qty + 1
        }
        return cart
      })
    
      return {
        ...state,
        cart: newQtyCart
      }

      case 'REDUCE_QTY':
        const newQty = state.cart.map(cart => {
          if (cart.id === action.payload) {
            cart.qty = cart.qty - 1
          }
          return cart
        })
        return {
          ...state,
          cart: newQty
        }

      case 'REMOVE_ITEM':
        const newRemove = state.cart.filter(cart => cart.id !== action.payload)
        return{
          ...state,
          cart : newRemove
        }
    default:
      return state
  }
}

export default cart
