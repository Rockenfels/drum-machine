//action constants
export const FUNK = 'FUNK';
export const POWER = 'POWER';
export const HIT = 'HIT';

//action creators
export const bringFunk = () => ({
    type: FUNK
});

export const powerSwitch = () => ({
    type: POWER
});

export const hitNote = (instrument) => ({
    type: HIT,
    payload: instrument
});
