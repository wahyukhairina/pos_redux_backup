import axios from 'axios'
require ( 'dotenv' ).config();

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/category`
    })
  }
}

export const postCategory = (data) => {
  return {
    type: 'POST_CATEGORY',
    payload: axios.post(`${process.env.REACT_APP_API_URL}/category`, data)
  }
}

export const deleteCategory = (id) => {
  console.log(id)
  return {
    type: 'DELETE_CATEGORY',
    payload: axios.delete(`${process.env.REACT_APP_API_URL}/category/${id}`)
  }
}