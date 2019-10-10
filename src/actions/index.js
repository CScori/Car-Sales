export const ADD_FEATURE ='ADD_FEATURE'
export const addPrice = (id) => {
    console.log('adding feature', id);
    return { type: ADD_FEATURE, payload: id };
  };
  export const REMOVE_LIST = 'REMOVE_LIST'
  export const deleteItem = (id) => {
    return { type: REMOVE_LIST, payload: id };
  }