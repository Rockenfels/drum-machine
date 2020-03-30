import React from 'react';
import { connect } from 'react-redux';
import './PadDisplay.scss';

class PadDisplay extends React.Component {

  render(){
    return(
      <React.Fragment>
        <div id='display'>{this.props.instrument}</div>
      </React.Fragment>
    );
  }
}

const mapState = (state, ownProps) => {
  const { instrument } = state;
  return({instrument: instrument});
};

export default connect(mapState, null)(PadDisplay);
