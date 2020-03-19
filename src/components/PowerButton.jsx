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
    this.props.powerSwitch();
  }

  render(){
    if(this.props.power){
    return(
      <React.Fragment>
        <div id='power' onClick={this.handleClick} className='power-on' />
      </React.Fragment>
    );
  }

    else{
      return(
        <React.Fragment>
          <div id='power' onClick={this.handleClick} className='power-off' />
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
