export const ADD_FEATURE ='ADD_FEATURE'
export const addPrice = (feature) => {
    console.log('adding feature', feature);
    return { type: ADD_FEATURE, payload: feature };
  };
  export const REMOVE_LIST = 'REMOVE_LIST'
  export const deleteItem = (id) => {
    return { type: REMOVE_LIST, payload: id };
  }