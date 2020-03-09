import axios from 'axios'
require('dotenv').config()

export const login = (data) => {
  return {
    type: 'LOGIN_USER',
    payload: axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/user/login`,
      data: data
    })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT_USER'
  }
}
