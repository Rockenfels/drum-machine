import { POWER, HIT } from './components/drumBoxActions.js';


/* toggles on/off state and basic/funk mode or returns default */
export const rootReducer = (defaultState = { funkMode:false, power:true, instrument:'' }, action) => {
  switch(action.type){
        case POWER:
      return {...defaultState, power:!action.payload };
        case HIT:
        return {...defaultState, instrument:action.payload}
    default:
      return defaultState;
    }
  }
