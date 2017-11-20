var record = require('./record')
var convert = require('./convert')
var sentiment = require('./sentiment');

module.exports = function(projectId){

  return new Promise(function(resolve, reject){

    var date = new Date()
    var recordPath = "recordings/" + date.getTime() +".wav";

    record(recordPath).then(function(filePath) {
      return convert(filePath, projectId);
    }).then(function(data){
      // Results of STT
      var joinedTranscript = joinSttResults(data[0].results);
      return sentiment(joinedTranscript);
    }).then(function(sentiment){
      // Results of sentiment
      var results = JSON.parse(sentiment);
      // console.log("Sentiment:", results);
      resolve(results);
    }).catch(function(err){
      // Any errors come out here.
      reject(err);
    });
  }); // End of promise

}

function joinSttResults(results){
  // If multiple lines of transcription then join.
  var mapped = results.map(function(result){
    return result.alternatives[0].transcript
  });
  return mapped.join('\n');
}
