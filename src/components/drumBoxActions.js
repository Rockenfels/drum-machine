//action constants
const FUNK = 'FUNK';
const POWER = 'POWER';
const HIT = 'HIT';

//action creators
const bringFunk = () => {
  {
    type: FUNK
  }
};

const powerSwitch = () => {
  {
    type: POWER
  }
}

const hitNote = (instrument) => {
  {
    type: HIT,
    payload: instrument
  }
}

export bringFunk;
export powerSwitch;
export hitNote;
