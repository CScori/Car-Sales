import React from 'react';
import { connect } from 'react-redux';
import { addPrice } from '../actions'

const AdditionalFeature = props => {
  console.log('passed props', props)
  return (
    <li>
      
      <button onClick={e => {props.addPrice(props.feature) }} className="button">Add</button>
      {props.feature.price} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature