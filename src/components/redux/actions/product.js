import axios from 'axios'
require ( 'dotenv' ).config();

export const getProducts = () => {
  // console.log(process.env)
  return {
    type: 'GET_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product`,
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
      }
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

export const searchProduct = (name) => {
  return {
    type: 'SEARCH_PRODUCTS',
    payload: axios.get(`h${process.env.REACT_APP_API_URL}/product/?searchName=${name}`, {
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
      }
    })
    
  }
}

export const sortProduct = (type) => {
  return {
    type: 'SORT_PRODUCTS',
    payload: axios.get(`${process.env.REACT_APP_API_URL}/product/?sort=price&type=${type}`, {
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
    }
    }) 
}
}

export const paginationProduct = (page) => {
  return {
    type: 'PAGINATION',
    payload: axios ({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product/?page=${page}`,
      headers: {
        authorization: localStorage.getItem('token'),
        'user-id': localStorage.getItem('user-id')
      }
    })
  }
}
