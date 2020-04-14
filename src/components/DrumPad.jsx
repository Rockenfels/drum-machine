import React from 'react';
import { connect } from 'react-redux';
import { hitNote } from './drumBoxActions.js';
import { bindActionCreators } from 'redux';
import { soundEffects } from './audioComp.js';
import './DrumPad.scss';

class DrumPad extends React.Component {
  constructor(props, context){
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.power){
        this.props.hitNote(this.props.id);

        const instrument = document.getElementById(this.props.hotKey);

        if (instrument.canPlayType('audio/mpeg')) {
          instrument.play();
        }
      }
  }


  render(){
    return(
        <div className="drum-pad" id={`${this.props.instrument}-pad`} onClick={this.handleClick} >
          <img src={this.props.photo} className='pad-image' alt={this.props.id + ' icon'}/>
          <h4 className='instrument-label'>{this.props.hotKey}</h4>
            <audio
              className='clip'
              id={this.props.hotKey}
              preload='auto'
              instrument={this.props.instrument}
              html5='true'
              tabIndex='0'
              src={soundEffects[this.props.id]} type='audio/mpeg'
              />
        </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const { power } = state;
  return({
    power: power,
    instrument: ownProps.instrument,
    photo: ownProps.photo,
    hotKey: ownProps.hotKey,
  });
}

const mapDispatch = dispatch => bindActionCreators(
  {
    hitNote
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(DrumPad);
