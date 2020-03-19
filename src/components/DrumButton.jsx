import React from 'react';
import { connect } from 'react-redux';
import { hitNote } from './drumBoxActions.js';
import { bindActionCreators } from 'redux';
import { soundEffects } from './audioComp.js';
import './DrumButton.scss';

class DrumButton extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    if(this.props.power){
      if(!this.props.funkMode){
        const instrument = event.target.getAttribute('instrument')
        this.props.hitNote(instrument);
        soundEffects.instrument.play();
      }
      else{
        const instrument = 'funk' + event.target.getAttribute('instrument');
        this.props.hitNote(instrument);
        soundEffects.instrument.play();
      }
    }
  }

  render(){
    console.log(this.props.photo);
    if(!this.props.funkMode){
      return(
        <div className="drum-pad" onClick={this.handleClick} >
          <img src={this.props.photo} className='pad-image' />
          <h5 className='instrument-label'>{this.props.id}</h5>
          <audio src={soundEffects[this.props.instrument]} />
        </div>
      );
    }
    else{
      return(
        <div className="drum-pad" onClick={this.handleClick} >
          <img src={this.props.photo} className='pad-image' />
          <h5 className='instrument-label'>{this.props.id}</h5>
          <audio src={soundEffects['funk' + this.props.instrument]} />
        </div>
      );
    }
  }
}

const mapState = (state, ownProps) => {
  const { power, funkMode } = state;
  return({
    power: power,
    photo: ownProps.photo,
    instrument: ownProps.instrument,
    funkMode: funkMode
  });
}

const mapDispatch = dispatch => bindActionCreators(
  {
    hitNote
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(DrumButton);
