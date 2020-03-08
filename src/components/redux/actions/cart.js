export const addCart = (data) => {
  return {
    type: 'ADD_CART',
    payload: data
  }
}

export const addQty = (id) => {
  return {
    type: 'ADD_QTY',
    payload: id
  }
}

export const reduceQty = (id) => {
    return {
      type: 'REDUCE_QTY',
      payload: id
    }
  }

  export const removeItem = (id) => {
    return {
      type: 'REMOVE_ITEM',
      payload: id
    }
  }
