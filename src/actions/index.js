export const ADD_FEATURE ='ADD_FEATURE'
export const addFeatures = (props) => {
    console.log(`adding feature, feature`);
    return { type: ADD_FEATURE, payload: props.features.id };
  };