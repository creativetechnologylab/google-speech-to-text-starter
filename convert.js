// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');
const fs = require('fs');

// Your Google Cloud Platform project ID
const sampleRate = 16000

module.exports = (filePath, projectId) => {

  // Instantiates a client
  const speechClient = Speech({
    projectId: projectId
  });


  // Reads a local audio file and converts it to base64
  const file = fs.readFileSync(filePath);
  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audioBytes = file.toString('base64');
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: sampleRate,
    languageCode: 'en-GB'
  };

  const request = {
    audio: {
      content: audioBytes
    },
    config: config
  };

  return speechClient.recognize(request)
}
