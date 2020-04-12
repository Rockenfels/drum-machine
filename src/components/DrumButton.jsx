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
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleClick(){
    if(this.props.power){
        this.props.hitNote(this.props.id);

        const instrument = document.getElementById(this.props.hotKey);

        if (instrument.canPlayType('audio/mpeg')) {
          instrument.play();
          console.log(instrument.id.charCodeAt(0));
        }
      }
  }

  handlePlay(e){
    console.log(e.key);
    if(this.props.power){
      if(e.key === this.props.hotKey){
        this.props.hitNote(this.props.id);

        const instrument = document.getElementById(this.props.hotKey);

        if (instrument.canPlayType('audio/mpeg') && e.key === this.props.hotKey) {
          instrument.play();
          console.log(instrument.id.charCodeAt(0));
        }
      }
    }
  }

  render(){
    return(
        <div className="drum-pad" onClick={this.handleClick} >
          <img src={this.props.photo} className='pad-image' alt={this.props.id + ' icon'}/>
          <h4 className='instrument-label'>{this.props.hotKey}</h4>
            <audio
              className='clip'
              id={this.props.hotKey}
              preload='auto'
              //autoPlay={true}
              html5='true'
              onKeyDown={this.handlePlay}
              tabIndex='0'
              >
              <source src={soundEffects[this.props.id]} type='audio/mpeg' />
            </audio>
        </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const { power, instrument } = state;
  return({
    power: power,
    instrument: instrument,
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

export default connect(mapState, mapDispatch)(DrumButton);
