import React from 'react';
import DrumPad from './components/DrumPad.jsx';
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
import cowbell from '/Users/DogPa/workspace/drum-machine/src/images/cowbell.module.png';
import { connect } from 'react-redux';
import { hitNote } from './components/drumBoxActions.js';
import { bindActionCreators } from 'redux';

class App extends React.Component{
  componentDidMount() {
    document.addEventListener("keydown", e => {
      this.handlePlay(e);
    });
  }

  handlePlay = e => {
        const instrument = document.getElementById(e.key.toUpperCase());
        if (instrument !== null && instrument.canPlayType("audio/mpeg") && this.props.power) {
          instrument.play();
          this.props.hitNote(instrument.getAttribute('instrument'));
        }
  };
  render(){
    return (
        <div id='drum-shell'>
          <div id='drum-machine'>
              <DrumPad id='crash' instrument='crash' hotKey='Q' photo={crash} alt="crash cymbal, hotkey q" >Q</DrumPad>
              <DrumPad id='ride' instrument='ride' hotKey='W' photo={ride} alt="ride cymbal, hotkey w" >W</DrumPad>
              <DrumPad id='hiHat' instrument='hiHat' hotKey='E' photo={hiHat} alt="hi-hat cymbal, hotkey e" >E</DrumPad>
              <DrumPad id='snare' instrument='snare' hotKey='A' photo={snare} alt="snare drum, hotkey a" >A</DrumPad>
              <DrumPad id='tom1' instrument='tom1' hotKey='S' photo={tom1} alt="tom 1, hotkey s" >S</DrumPad>
              <DrumPad id='tom2' instrument='tom2' hotKey='D' photo={tom2} alt="tom 2, hotkey d" >D</DrumPad>
              <DrumPad id='tom3' instrument='tom3' hotKey='Z' photo={tom2} alt="tom3, hotkey z" >Z</DrumPad>
              <DrumPad id='bass' instrument='bass' hotKey='X' photo={bass} alt="bass, hotkey x" >X</DrumPad>
              <DrumPad id='cowbell' instrument='cowbell' hotKey='C' photo={cowbell} alt="cowbell, hotkey c" >C</DrumPad>
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
  return {power: power};
}

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      hitNote
    },
    dispatch
  );

export default connect(
  mapState,
  mapDispatch
)(App);
