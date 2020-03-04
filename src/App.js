import React from 'react';
import DrumButton from './components/DrumButton.jsx';
import DrumBox from './components/DrumBox.jsx'
import PadBank from './components/PadBank.jsx';
import ControlBank from './componenets/ControlBank.jsx';
import Paddisplay from './componenets/PadDisplay.jsx';
import './App.css';

function App() {
  if(!props.funkMode){
    return (
      <DrumBox>
        <PadBank>
          <DrumButton id='q' instrument='crash' className='drum-pad' photo='./images/crash.png' />
          <DrumButton id='w' instrument='ride' className='drum-pad' photo='./images/rinstrumente.png' />
          <DrumButton id='e' instrument='hiHat' className='drum-pad' photo='./images/hiHat.png' />
          <DrumButton id='a' instrument='snare' className='drum-pad' photo='./images/snare.png' />
          <DrumButton id='s' instrument='tom1' className='drum-pad' photo='./images/tom1.png' />
          <DrumButton id='d' instrument='tom2' className='drum-pad' photo='./images/tom2.png' />
          <DrumButton id='z' instrument='bass' className='drum-pad' photo='./images/bass.png' />
          <DrumButton id='x' instrument='triangle' className='drum-pad' photo='./images/triangle.png' />
          <DrumButton id='c' instrument='congo' className='drum-pad' photo='./images/congo.png' />
        </PadBank>
        <ControlBank id='control-bank' >
          <PadDisplay id='display' />
          <PowerButton />
        </ControlBank
      </DrumBox>
    );
  }

}

export default App;
