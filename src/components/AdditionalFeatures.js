import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addPrice } from '../actions'
class AdditionalFeatures extends React.Component{
  
  
  render(){
    console.log('addtl features props', this.props)
    return (
      <div className="content">
        <h4>Additional Features</h4>
        {this.props.add.length ? (
          <ol type="1">
            {this.props.add.map(item => (
              <AdditionalFeature key={item.id} feature={item} addPrice={this.props.addPrice}/>
            ))}
          </ol>
        ) : (
          <p>Nice looking car!</p>
        )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log('addtl', state.reducer.add);
  return {
    add: state.reducer.add
  };
};

export default connect(mapStateToProps, { addPrice })(AdditionalFeatures);
