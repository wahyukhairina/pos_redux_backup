const initialState = {
  histories: []
}
const order = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ORDER_PENDING":
      return {
        ...state
      };
    case "POST_ORDER_REJECTED":
      return {
        ...state
      };
    case "POST_ORDER_FULFILLED":
      return {
        ...state
      };
    case "GET_HISTORY_PENDING":
      return {
        ...state
      };
    case "GET_HISTORY_REJECTED":
      return {
        ...state
      };
    case "GET_HISTORY_FULFILLED":
      console.log('ININIINI', action.payload)
      return {
        ...state,
        histories: action.payload.data
      };
    default:
      return state;
  }
}
export default order
