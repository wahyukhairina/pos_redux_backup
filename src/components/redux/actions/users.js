import axios from 'axios'
require ( 'dotenv' ).config(); 

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:8006/user'
    })
  }
}

export const postUser = (data) => {
  return {
    type: 'POST_USER',
    payload: axios.post('http://localhost:8006/user/register', data)
  }
}

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    payload: axios.delete(`http://localhost:8006/user/${id}`)
  }
}

export const updateUser = (userId, data) => {
  return {
    type: 'UPDATE_USER',
    payload: axios({
      method: 'PATCH',
      url: `http://localhost:8006/user/${userId}`,
      data: data
    })
  }
}
