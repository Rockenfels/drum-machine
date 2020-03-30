import React from 'react';
import { bringFunk } from './drumBoxActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './FunkSwitch.scss';

class FunkSwitch extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.bringFunk(this.props.funkMode);
  }

//Button for funk-off mode
  render(){
    if(!this.props.funkMode){
      return(
        <React.Fragment>
          <label alt='funk mode swith in off mode'>Funk-Mode Switch:
              <div className='funk-off' onClick={this.handleClick}>
                <div id='funk-slider' />
              </div>
          </label>
        </React.Fragment>
      );
    }

//Button for funk-on mode
    else{
      return(
        <React.Fragment>
          <label alt="funk mode switch in on mode">Funk-Mode Switch:
            <div className='funk-on' onClick={this.handleClick}>
              <div id='funk-slider' />
            </div>
          </label>
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
