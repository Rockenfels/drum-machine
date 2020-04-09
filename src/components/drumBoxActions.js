//action constants
export const POWER = 'POWER';
export const HIT = 'HIT';

//action creators
export const powerSwitch = (power) => ({
    type: POWER,
    payload: power
});

export const hitNote = (instrument) => ({
    type: HIT,
    payload: instrument
});
