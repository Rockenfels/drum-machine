import React from 'react';
import { powerSwitch } from './drumBoxActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './PowerButton.scss';

class PowerButton extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.powerSwitch(this.props.power);
  }

  render(){
    if(this.props.power){
    return(
      <React.Fragment>
        <label alt='power button in on mode'>Power:
          <div id='power' onClick={this.handleClick} className='power-on'>
            <div id='power-slider' />
          </div>
        </label>
      </React.Fragment>
    );
  }

    else{
      return(
        <React.Fragment>
          <label alt='power button in off mode'>Power:
            <div id='power' onClick={this.handleClick} className='power-off'>
              <div id='power-slider' />
            </div>
          </label>
        </React.Fragment>
      );
    }
  }
}

const mapState = (state) => {
  const { power } = state;
  return({power: power});
};

const mapDispatch = dispatch => bindActionCreators(
  {
    powerSwitch
  },
  dispatch
);

export default connect(mapState, mapDispatch)(PowerButton);
