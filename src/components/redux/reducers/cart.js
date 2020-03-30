const initialState = {
  cart: [],
  total: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
        const newCart = [...state.cart, action.payload] 
        const total = action.payload.total
      return {
        ...state,
        cart: newCart,
        total: total
      }

    case 'ADD_QTY':

      console.log(action.payload)
      const newQtyCart = state.cart.map(cart => {
        if (cart.id === action.payload.id) {
          cart.qty = cart.qty + 1
        }
     
        return cart
      })
      const newTotal = action.payload.total 
    
      return {
        ...state,
        cart: newQtyCart,
        total: newTotal
      }

      case 'REDUCE_QTY':
        const newQty = state.cart.map(cart => {
          if (cart.id === action.payload.id) {
            cart.qty = cart.qty - 1
          }
          return cart
        })

        const nwTotal = action.payload.total
        return {
          ...state,
          cart: newQty,
          total: nwTotal
        }

      case 'REMOVE_ITEM':
        const newRemove = state.cart.filter(cart => cart.id !== action.payload.id)
        const retotal = action.payload.total
        return{
          ...state,
          cart: newRemove,
          total: retotal
        }

        case 'REMOVE_CART':
        return{
          ...state,
          cart: []
        }
    default:
      return state
  }
}

export default cart
