var stt = require('./stt')
var rpio = require('rpio');

var projectId = 'pipe001-184515';

rpio.open(12, rpio.INPUT, rpio.PULL_DOWN);
function pollcb(pin){
  var state = rpio.read(pin) ? 'pressed' : 'released';
  console.log('Button event on P%d (button currently %s)', pin, state);
  if(state == 'pressed'){
    stt(projectId).then(function(sentiment){
      console.log(sentiment.label)

      if(sentiment.label == "neg"){
        console.log("1");
      }

      if(sentiment.label == "neutral"){
        console.log("2");
      }

      if(sentiment.label == "pos"){
        console.log("3");
      }

    }).catch(function(err){
      console.error(err);
    });
  }
}

rpio.poll(12, pollcb);
