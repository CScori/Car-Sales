import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

class AdditionalFeatures extends React.Component{
  
  
  render(){
    console.log('addtl features props', this.props)
    return (
      <div className="content">
        <h4>Additional Features</h4>
        {this.props.add.length ? (
          <ol type="1">
            {this.props.add.map(item => (
              <AdditionalFeature key={item.id} feature={item} />
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
  // the keys of the returned obj will be props passed into the comp
  return {
    add: state.reducer.add
  };
};

export default connect(mapStateToProps, null)(AdditionalFeatures);
