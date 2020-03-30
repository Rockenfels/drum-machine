//action constants
export const FUNK = 'FUNK';
export const POWER = 'POWER';
export const HIT = 'HIT';

//action creators
export const bringFunk = (status) => ({
    type: FUNK,
    payload: status
});

export const powerSwitch = (power) => ({
    type: POWER,
    payload: power
});

export const hitNote = (instrument) => ({
    type: HIT,
    payload: instrument
});
