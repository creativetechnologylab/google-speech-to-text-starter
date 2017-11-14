const record = require('node-record-lpcm16')
const fs = require('fs')

const sampleRate = 16000

module.exports = (filePath) => {

  const date = new Date()
  const file = fs.createWriteStream(filePath, { encoding: 'binary' })

  record.start({
    sampleRate  : sampleRate,
    threshold   : 0.5,
    verbose     : true,
    silence     : '10.0',
  })
  .pipe(file)

  const recordPromise = new Promise((resolve, reject) => {
    // Stop recording after three seconds
    setTimeout(function () {
      record.stop()
      resolve(filePath)
    }, 10000)
  });

  return recordPromise
}
