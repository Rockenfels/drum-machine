import React from 'react';
import { connect } from 'react-redux';
import DrumButton from './components/DrumButton.jsx';
import PadDisplay from './components/PadDisplay.jsx';
import PowerButton from './components/PowerButton.jsx';
import FunkSwitch from './components/FunkSwitch.jsx';
import './App.scss';
import crash from '/Users/DogPa/workspace/drum-machine/src/images/crash.module.png';
import ride from '/Users/DogPa/workspace/drum-machine/src/images/ride.module.png';
import hiHat from '/Users/DogPa/workspace/drum-machine/src/images/highHat.module.png';
import snare from '/Users/DogPa/workspace/drum-machine/src/images/snare.module.png';
import tom1 from '/Users/DogPa/workspace/drum-machine/src/images/tomTom1.module.png';
import tom2 from '/Users/DogPa/workspace/drum-machine/src/images/tomTom2.module.png';
import bass from '/Users/DogPa/workspace/drum-machine/src/images/bass.module.png';
import cowbell from '/Users/DogPa/workspace/drum-machine/src/images/triangle.module.png';
//import * from './images';

function App() {
  return (
    <div id='drum-machine'>
      <div id='pad-bank'>
        <DrumButton id='q' instrument='crash' className='drum-pad' photo={crash} alt="crash cymbal, hotkey q" />
        <DrumButton id='w' instrument='ride' className='drum-pad' photo={ride} alt="ride cymbal, hotkey w" />
        <DrumButton id='e' instrument='hiHat' className='drum-pad' photo={hiHat} alt="hi-hat cymbal, hotkey e" />
        <DrumButton id='a' instrument='snare' className='drum-pad' photo={snare} alt="snare drum, hotkey a" />
        <DrumButton id='s' instrument='tom1' className='drum-pad' photo={tom1} alt="tom 1, hotkey s" />
        <DrumButton id='d' instrument='tom2' className='drum-pad' photo={tom2} alt="tom 2, hotkey d" />
        <DrumButton id='z' instrument='tom3' className='drum-pad' photo={tom2} alt="tom3, hotkey z" />
        <DrumButton id='x' instrument='bass' className='drum-pad' photo={bass} alt="bass, hotkey x" />
        <DrumButton id='c' instrument='cowbell' className='drum-pad' photo={cowbell} alt="cowbell, hotkey c" />
      </div>
      <div id='control-bank' >
        <PadDisplay id='display' />
        <FunkSwitch />
        <PowerButton />
      </div>
    </div>
  );
}

const mapState = (state) => {
  const { funkMode } = state;
  return {funkMode: funkMode}
};

export default connect(mapState, null)(App);
