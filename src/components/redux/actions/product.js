import axios from 'axios'
require ( 'dotenv' ).config()

export const getProducts = (data) => {
  console.log('product',process.env.REACT_APP_API_URL)
  return {
    type: 'GET_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product/?limit=6`,
      headers: data
    })
  }
}

export const postProduct = (data) => {
  return {
    type: 'POST_PRODUCTS',
    payload: axios.post(`${process.env.REACT_APP_API_URL}/product`, data)
  }
}

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCTS',
    payload: axios.delete(`${process.env.REACT_APP_API_URL}/product/${id}`)
  }
}

export const updateProduct = (productId, data) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: axios({
      method: 'PATCH',
      url: `${process.env.REACT_APP_API_URL}/product/${productId}`,
      data: data
    })
  }
}

export const searchProduct = (name, auth) => {
  return {
    type: 'SEARCH_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product/?searchName=${name}`,
      headers: auth
    })
   
    
  }
}

export const sortProduct = (auth, type) => {
  return {
    type: 'SORT_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product/?sort=price&type=${type}`,
      headers: auth
    })
  }
}

export const paginationProduct = (auth, page) => {
  return {
    type: 'PAGINATION',
    payload: axios ({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product/?page=${page}`,
      headers: auth
    })
  }
}
