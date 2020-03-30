import { combineReducers } from 'redux'
import products from './product'
import user from './users'
import cart from './cart'
import category from './category'
import auth from './auth'
import order from './checkout'

export default combineReducers({
  products,
  user,
  cart,
  category,
  auth,
  order,
})
