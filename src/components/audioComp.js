/* audio components for standard machine */
const crash = new Audio('src/sounds/909-Crash-HD0.wav');
const ride = new Audio('src/sounds/909-Ride-D4.wav');
const hiHat = new Audio('src/sounds/80s-HHCLOSE1.aif');
const snare = new Audio('src/sounds/909-Snare-T0T0S3.wav');
const tom1 = new Audio('src/sounds/909-HiTom-0D0.wav');
const tom2 = new Audio('src/sounds/909-MidTom-0DA.wav');
const tom3 = new Audio('src/sounds/909-LoTom-0D7.wav');
const bass = new Audio('src/sounds/909-Kick-T7A0D0.wav');
const cowbell = new Audio('src/sounds/80s-COWBELL1.aif');


/* audio components for FUNK machine */
const funkCrash = new Audio('placeholder.extension');
const funkRide = new Audio('placeholder.extension');
const funkHiHat = new Audio('placeholder.extension');
const funkSnare = new Audio('placeholder.extension');
const funkTom1 = new Audio('placeholder.extension');
const funkTom2 = new Audio('placeholder.extension');
const funkBass = new Audio('placeholder.extension');
const funkTriangle = new Audio('placeholder.extension');
const funkCongo = new Audio('placeholder.extension');

export const soundEffects = {
  crash: crash,
  ride: ride,
  hiHat: hiHat,
  snare: snare,
  tom1: tom1,
  tom2: tom2,
  tom3: tom3,
  bass: bass,
  cowbell: cowbell,
  funkCrash: funkCrash,
  funkRide: funkRide,
  funkHiHat: funkHiHat,
  funkSnare: funkSnare,
  funkTom1: funkTom1,
  funkTom2: funkTom2,
  funkBass: funkBass,
  funkTriangle: funkTriangle,
  funkCongo: funkCongo
};

export default soundEffects;
