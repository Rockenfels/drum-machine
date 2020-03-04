import React from 'react';
import { bringFunk } from './drumBoxActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bringFunk } from './drumBoxActions.js';

class FunkSwitch extends React.Component {
  constructor(props){
    super(props);
    this.handleClick() = this.handleClick().bind(this);
  }

  handleClick() {
    this.props.bringFunk();
  }

//Button for funk-off mode
  render(){
    if(!this.props.funkMode){
      return(
        <React.Fragment>
          <div className='switch-wrapper funk-on'>
            <button className='switch funk-off' onClick={this.handleClick()} />
          </div>
        </React.Fragment>
      );
    }

//Button for funk-on mode
    else{
      return(
        <React.Fragment>
          <button className='switch-wrapper funk-on' onClick={this.handleClick()} />
        </React.Fragment>
      );
    }
  }
}

const mapState = (state) => {
  const { funkMode } = state;
  return({funkMode: funkMode});
}

const mapDispatch = dispatch => bindActionCreators(
  {
    bringFunk
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(FunkSwitch);
