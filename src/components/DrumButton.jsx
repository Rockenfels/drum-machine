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

  handleClick(){
    if(this.props.power){
        this.props.hitNote(this.props.instrument);

        const instrument = document.getElementById(this.props.instrument);

        if (instrument.canPlayType('audio/mpeg')) {
          instrument.play();
          console.log(instrument.id.charCodeAt(0));
        }
      }
  }

  render(){
          return(

              <div className="drum-pad" onClick={this.handleClick} onKeyDown={this.handlePress}>
                <img src={this.props.photo} className='pad-image' alt={this.props.instrument + ' icon'}/>
                <h4 className='instrument-label'>{this.props.id}</h4>
                  <audio
                    class='clip'
                    id={this.props.instrument}
                    preload='auto'
                    //autoPlay={true}
                    html5='true'>
                    <source src={soundEffects[this.props.instrument]} type='audio/mpeg' />
                  </audio>
              </div>
          );
    }
}

const mapState = (state, ownProps) => {
  const { power } = state;
  return({
    power: power,
    photo: ownProps.photo,
    instrument: ownProps.instrument,
  });
}

const mapDispatch = dispatch => bindActionCreators(
  {
    hitNote
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(DrumButton);
