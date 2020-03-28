const initialState = {
  isAuthenticated: false,
  profile: {}
}

export default function (state = initialState, action) {
  console.log('direducer',action)
  switch (action.type) {
    case 'LOGIN_USER_PENDING':
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      }
    case 'LOGIN_USER_REJECTED':
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      }
    case 'LOGIN_USER_FULFILLED':
      return {
        ...state,
        isAuthenticated: true,
        profile: action.payload.data
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      }
    default:
      return state
  }
}
