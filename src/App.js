import React from 'react';
import DrumButton from './components/DrumButton.jsx';
import PadDisplay from './components/PadDisplay.jsx';
import PowerButton from './components/PowerButton.jsx';
import './App.scss';
import crash from '/Users/DogPa/workspace/drum-machine/src/images/crash.module.png';
import ride from '/Users/DogPa/workspace/drum-machine/src/images/ride.module.png';
import hiHat from '/Users/DogPa/workspace/drum-machine/src/images/highHat.module.png';
import snare from '/Users/DogPa/workspace/drum-machine/src/images/snare.module.png';
import tom1 from '/Users/DogPa/workspace/drum-machine/src/images/tomTom1.module.png';
import tom2 from '/Users/DogPa/workspace/drum-machine/src/images/tomTom2.module.png';
import bass from '/Users/DogPa/workspace/drum-machine/src/images/bass.module.png';
import cowbell from '/Users/DogPa/workspace/drum-machine/src/images/triangle.module.png';
import { soundEffects } from './components/audioComp.js';
import { connect } from 'react-redux';
import { hitNote } from './components/drumBoxActions.js';
import { bindActionCreators } from 'redux';

class App extends React.Component{
  constructor(props){
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e){
    const instrument = document.getElementById(e.key);
    const sound = soundEffects[instrument.instrument];
    if (sound.canPlayType('audio/mpeg')){
      sound.play();
    }
  }
  render(){
    return (
        <div id='drum-machine'>
          <div id='pad-bank'>
              <DrumButton id='crash' hotKey='q' className='drum-pad' photo={crash} alt="crash cymbal, hotkey q" />
              <DrumButton id='ride' hotKey='w' className='drum-pad' photo={ride} alt="ride cymbal, hotkey w" />
              <DrumButton id='hiHat' hotKey='e' className='drum-pad' photo={hiHat} alt="hi-hat cymbal, hotkey e" />
              <DrumButton id='snare' hotKey='a' className='drum-pad' photo={snare} alt="snare drum, hotkey a" />
              <DrumButton id='tom1' hotKey='s' className='drum-pad' photo={tom1} alt="tom 1, hotkey s" />
              <DrumButton id='tom2' hotKey='d' className='drum-pad' photo={tom2} alt="tom 2, hotkey d" />
              <DrumButton id='tom3' hotKey='z' className='drum-pad' photo={tom2} alt="tom3, hotkey z" />
              <DrumButton id='bass' hotKey='x' className='drum-pad' photo={bass} alt="bass, hotkey x" />
              <DrumButton id='cowbell' hotKey='c' className='drum-pad' photo={cowbell} alt="cowbell, hotkey c" />
          </div>
          <div id='control-bank' >
            <PadDisplay id='display' />
            <PowerButton />
          </div>
        </div>
    );
  }
}

const mapState = (state) => {
  const { power } = state;
  return({
    power: power,
  });
}

const mapDispatch = dispatch => bindActionCreators(
  {
    hitNote
  },
  dispatch,
);

export default connect(mapState, mapDispatch)(App);
