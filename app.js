var date = new Date()
var recordPath = "recordings/" + date.getTime() +".wav";
const projectId = 'test-project-candelete';

var record = require('./record')
var convert = require('./convert')
var sentiment = require('./sentiment');

record(recordPath).then(function(filePath) { // Results of transcription
  console.log("Recording complete: " + filePath);
  return convert(filePath, projectId);
}).then(function(data){
  // Results of STT
  var joinedTranscript = joinSttResults(data[0].results);
  console.log("Transcript:" + joinedTranscript);
  return sentiment(joinedTranscript);
}).then(function(sentiment){
  // Results of sentiment
  console.log("Sentiment:", JSON.parse(sentiment));
}).catch(function(err){
  // Any errors come out here.
  console.error('ERROR:', err);
});

function joinSttResults(results){
  // If multiple lines of transcription then join.
  var mapped = results.map(function(result){
    return result.alternatives[0].transcript
  });
  return mapped.join('\n');
}
