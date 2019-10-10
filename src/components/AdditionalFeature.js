import React from 'react';
import { connect } from 'react-redux';
import { addPrice } from '../actions'

const AdditionalFeature = props => {
  console.log('passed props', props)
  return (
    <li>
      
      <button onClick={e => {props.addPrice(props.feature.id) }} className="button">Add</button>
      {props.feature.price} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log('single', state.reducer.add);
  return {
    add: state.reducer.add,
    car: state.reducer.car
  };
};

export default connect(mapStateToProps, { addPrice })(AdditionalFeature);
