import React from 'react';
import { connect } from 'react-redux';
import DrumButton from './components/DrumButton.jsx';
import PadDisplay from './components/PadDisplay.jsx';
import PowerButton from './components/PowerButton.jsx';
import './App.scss';

function App() {
  return (
    <div id='drum-machine' className='container-fluid'>
      <div id='pad-bank'>
        <DrumButton id='q' instrument='crash' className='drum-pad' photo='./images/crash.png' alt="crash cymbal, hotkey q" />
        <DrumButton id='w' instrument='ride' className='drum-pad' photo='./images/rinstrumente.png' alt="ride cymbal, hotkey w" />
        <DrumButton id='e' instrument='hiHat' className='drum-pad' photo='./images/hiHat.png' alt="hi-hat cymbal, hotkey e" />
        <DrumButton id='a' instrument='snare' className='drum-pad' photo='./images/snare.png' alt="snare drum, hotkey a" />
        <DrumButton id='s' instrument='tom1' className='drum-pad' photo='./images/tom1.png' alt="tom 1, hotkey s" />
        <DrumButton id='d' instrument='tom2' className='drum-pad' photo='./images/tom2.png' alt="tom 2, hotkey d" />
        <DrumButton id='z' instrument='bass' className='drum-pad' photo='./images/bass.png' />
        <DrumButton id='x' instrument='triangle' className='drum-pad' photo='./images/triangle.png' />
        <DrumButton id='c' instrument='congo' className='drum-pad' photo='./images/congo.png' />
      </div>
      <div id='control-bank' >
        <PadDisplay id='display' />
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
