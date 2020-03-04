import { FUNK, POWER } from './componenets/drumBoxActions.js';
import audioComp from './components/audioComp.js'


/* toggles on/off state and basic/funk mode or returns default */
const rootReducer = (defaultState = { funkMode:false, power:true, instrument:'' }, action) => {
  switch(action.type){
        case FUNK:
        const funkify = !this.funkMode;
      return {...defaultState, funkMode:funkify };
        case POWER:
        const val = !this.power;
      return {...defaultState, power:val };
        case HIT:
        return {...defaultState, instrument:action.payload}
    default:
      return defaultState;
    }
  }
