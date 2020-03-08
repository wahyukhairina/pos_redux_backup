const initialState = {
  category: []
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING':
      return {
        ...state
      }
    case 'GET_CATEGORY_REJECTED':
      return {
        ...state
      }
    case 'GET_CATEGORY_FULFILLED':
      return {
        ...state,
        category: action.payload.data
      }
    case 'POST_CATEGORY_PENDING':
      return {
        ...state
      }
    case 'POST_CATEGORY_REJECTED':
      return {
        ...state
      }
    case 'POST_CATEGORY_FULFILLED':
      const newDataCategory = [...state.category, action.payload.data.result]
      return {
        ...state,
        category: newDataCategory
      }
    default:
      return state
  }
}

export default category
