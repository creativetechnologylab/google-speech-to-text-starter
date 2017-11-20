var stt = require('./stt')

/* ------- STT -------- */
var projectId = 'pipe001-184515';
setTimeout(function(){
  stt(projectId).then(function(sentiment){
    console.log(sentiment)

    if(sentiment.label == "negative"){
      console.log("1");
    }

    if(sentiment.label == "neutral"){
      console.log("2");
    }

    if(sentiment.label == "positive"){
      console.log("3");
    }

  }).catch(function(err){
    console.error(err);
  });
})
