import axios from 'axios'
require ( 'dotenv' ).config(); 

export const getUser = () => {
  console.log('get user')
  return {
    type: 'GET_USER',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/user`
    })
  }
}

export const postUser = (data) => {
  return {
    type: 'POST_USER',
    payload: axios.post(`${process.env.REACT_APP_API_URL}/user/register`, data)
  }
}

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    payload: axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`)
  }
}

export const updateUser = (userId, data) => {
  return {
    type: 'UPDATE_USER',
    payload: axios({
      method: 'PATCH',
      url: `${process.env.REACT_APP_API_URL}/user/${userId}`,
      data: data
    })
  }
}
