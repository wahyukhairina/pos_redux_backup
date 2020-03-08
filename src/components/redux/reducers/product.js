const initialState = {
  products: [],
  pagination: []
}

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_PRODUCTS_REJECTED' :
      return {
        ...state,
        isLoading: true
      }
    case 'GET_PRODUCTS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        products: action.payload.data.result,
        pagination: action.payload.data.totalpages
      }
    case 'GET_DETAIL_PENDING':
      return {
        ...state
      }
    case 'GET_DETAIL_REJECTED' :
      return {
        ...state
      }
    case 'GET_DETAIL_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result
      }
    case 'POST_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'POST_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'POST_PRODUCTS_FULFILLED':
      // console.log(action.payload.data)
      const newDataProduct = [...state.products, action.payload.data.result]
      return {
        ...state,
        products: newDataProduct
      }
    case 'DELETE_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'DELETE_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'DELETE_PRODUCTS_FULFILLED':
      console.log(action.payload)
      const newProductAfterDelete = state.products.filter(products => products.id !== action.payload.data.result)
      return {
        ...state,
        isLoading: false,
        products: newProductAfterDelete
       
       

        // isLoading: false,
       
      }
    case 'UPDATE_PRODUCTS_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'UPDATE_PRODUCTS_REJECTED' :
      return {
        ...state, 
        isLoading: true
      }
    case 'UPDATE_PRODUCTS_FULFILLED':
      console.log(action.payload)
      const newProductUpdate = state.products.map(products => {
        if (products.id === action.payload.data.result.productId) {
          return action.payload.data.result
        }
        return products
      })
      return {
        ...state,
        isLoading: false,
        products: newProductUpdate
      }
    case 'SEARCH_PRODUCTS_PENDING':
      return {
        ...state
      }
    case 'SEARCH_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'SEARCH_PRODUCTS_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result
      }
    case 'SORT_PRODUCTS_PENDING' :
      return {
        ...state
      }
    case 'SORT_PRODUCTS_REJECTED' :
      return {
        ...state
      }
    case 'SORT_PRODUCTS_FULFILLED' :
      return {
        ...state,
        products: action.payload.data.result
      }
    case 'PAGINATION_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result
      }
    default:
      return state
  }
}

export default product
