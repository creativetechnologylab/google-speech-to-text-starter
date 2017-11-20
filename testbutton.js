var rpio = require('rpio');

// Initiating pin as input with pull down
rpio.open(12, rpio.INPUT, rpio.PULL_DOWN);
rpio.open(10, rpio.OUTPUT);


function pollcb(pin){
  var state = rpio.read(pin) ? 'pressed' : 'released';
  console.log('Button event on P%d (button currently %s)', pin, state);
  if(state == 'preseed'){
    rpio.write(10, rpio.HIGH)
    rpio.write(10, rpio.LOW)
  }
}

rpio.poll(12, pollcb);
