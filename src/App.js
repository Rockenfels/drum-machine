import React from 'react';
import { connect } from 'react-redux';
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
import { HotKeys } from "react-hotkeys";


//Sets up HotKey keymap and handler objects
const keymap = {
  CRASH: 'q',
  RIDE: 'w',
  HIHAT: 'e',
  SNARE: 'a',
  TOM1: 's',
  TOM2: 'd',
  TOM3: 'z',
  BASS: 'x',
  COWBELL: 'c'
}

const handlers = {
    CRASH: () => {
      const tone = document.getElementById('crash')
      tone.play();
    },
    RIDE: () => {
      const tone = document.getElementById('ride')
      tone.play();
    },
    HIHAT: () => {
      const tone = document.getElementById('hiHat')
      tone.play();
    },
    SNARE: () => {
      const tone = document.getElementById('snare')
      tone.play();
    },
    TOM1: () => {
      const tone = document.getElementById('tom1')
      tone.play();
    },
    TOM2: () => {
      const tone = document.getElementById('tom2')
      tone.play();
    },
    TOM3: () => {
      const tone = document.getElementById('tom3')
      tone.play();
    },
    BASS: () => {
      const tone = document.getElementById('bass')
      tone.play();
    },
    COWBELL: () => {
      const tone = document.getElementById('cowbell')
      tone.play();
    }
}

function App() {
  return (
    <HotKeys keymap={keymap}>
      <div id='drum-machine'>
        <div id='pad-bank'>
          <HotKeys handlers={handlers}>
            <DrumButton id='q' instrument='crash' className='drum-pad' photo={crash} alt="crash cymbal, hotkey q" />
            <DrumButton id='w' instrument='ride' className='drum-pad' photo={ride} alt="ride cymbal, hotkey w" />
            <DrumButton id='e' instrument='hiHat' className='drum-pad' photo={hiHat} alt="hi-hat cymbal, hotkey e" />
            <DrumButton id='a' instrument='snare' className='drum-pad' photo={snare} alt="snare drum, hotkey a" />
            <DrumButton id='s' instrument='tom1' className='drum-pad' photo={tom1} alt="tom 1, hotkey s" />
            <DrumButton id='d' instrument='tom2' className='drum-pad' photo={tom2} alt="tom 2, hotkey d" />
            <DrumButton id='z' instrument='tom3' className='drum-pad' photo={tom2} alt="tom3, hotkey z" />
            <DrumButton id='x' instrument='bass' className='drum-pad' photo={bass} alt="bass, hotkey x" />
            <DrumButton id='c' instrument='cowbell' className='drum-pad' photo={cowbell} alt="cowbell, hotkey c" />
          </HotKeys>
        </div>
        <div id='control-bank' >
          <PadDisplay id='display' />
          <FunkSwitch />
          <PowerButton />
        </div>
      </div>
    </HotKeys>
  );
}
