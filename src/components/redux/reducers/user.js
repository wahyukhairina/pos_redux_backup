const initialState = {
  user: []
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state
      }
    case 'GET_USER_REJECTED' :
      return {
        ...state
      }
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        user: action.payload.data
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
        user : action.payload.data.result
      }
    case 'POST_USER_PENDING':
      console.log(action.payload)
      return {
        ...state
      }
    case 'POST_USER_REJECTED' :
      return {
        ...state
      }
    case 'POST_USER_FULFILLED':
     
      const newDataUser = [...state.user, action.payload.data]
      return {
        ...state,
        user: newDataUser
      }
    case 'DELETE_USER_PENDING':
      return {
        ...state
      }
    case 'DELETE_USER_REJECTED' :
      return {
        ...state
      }
    case 'DELETE_USER_FULFILLED':
      const newUserAfterDelete = state.user.filter(user => user.id != action.payload.data)
      console.log(action.payload)
      return {
        ...state,
        // isLoading: false,
        user: newUserAfterDelete
      }
    case 'UPDATE_USER_PENDING':
      return {
        ...state
      }
    case 'UPDATE_USER_REJECTED' :
      return {
        ...state
      }
    case 'UPDATE_USER_FULFILLED':
      const newUserUpdate = state.user.map(user => {
        if (user.id === action.payload.data.id) {
          return action.payload.data
        }
        return user
      })
      return {
        ...state,
        user: newUserUpdate
      }
    default:
      return state
  }
}

export default user
