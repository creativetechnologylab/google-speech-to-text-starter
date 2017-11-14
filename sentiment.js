var rp = require('request-promise');

module.exports = (message) => {

  var options = {
    uri: 'http://text-processing.com/api/sentiment/',
    method: 'POST',
    body:  "text="+encodeURIComponent(message),
    headers: {
      // 'User-Agent': 'Request-Promise'
    }
  };

  return rp(options)

}
