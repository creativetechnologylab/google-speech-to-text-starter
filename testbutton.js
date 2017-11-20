var rpio = require('rpio');

// Initiating pin as input with pull down
rpio.open(12, rpio.INPUT, rpio.PULL_DOWN);

// conditional
if(rpio.read(12) == 'high'){
  console.log("button 12 high")
}

function pollcb(pin){
  var state = rpio.read(pin) ? 'pressed' : 'released';
  console.log('Button event on P%d (button currently %s)', pin, state);
}

rpio.poll(12, pollcb);
