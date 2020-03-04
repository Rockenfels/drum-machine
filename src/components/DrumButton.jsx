import React from 'react';
import { connect } from 'react-redux';
import { hitNote } from './drumBoxActions.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { soundEffects } from './audioComp.js';

class DrumButton extends React.Component {
  constructor(props){
    super(props);
    this.handleClick() = this.handleClick().bind(this);
  }

  handleClick(e){
    if(this.props.power){
      this.props.hitNote(e.target.getAttribute('instrument'));
      e.target.play()
    }
  }

  render(){
    return(
      <div className="drum-pad">
        <img src={this.props.photo} className='pad-image' />
        <h5 className='inner-text'>{this.props.id}</h5>
        <audio src={soundEffects[this.props.instrument]} onClick={handleClick()} />
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const { power } = state;
  return({power: power, photo:ownProps.photo, instrument:ownProps.instrument});
}

const mapDispatch = dispatch => bindActionCreators(
  {
    hitNote
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(DrumButton);
