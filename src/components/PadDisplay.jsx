import React from 'react';
import { connect } from 'react-redux';
import { sendBeat } from './drumBoxActions.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PadDisplay extends React.Component {

  render(){
    return(
      <React.Fragment>
        <div id='display'>{this.props.instrument}</div>
      </React.Fragment>
    );
  }

const mapState = (state) => {
  const { instrument } = state;
  return({instrument: instrument});
};

export default connect(mapState, null)(PadDisplay);
