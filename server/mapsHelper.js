var request = require('request');


var getPosition = function(address, callback) {
  address = address.replace(/ /g,"+");
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCNnBd6iXMKgGeHXV8_ctlXpgdNMUXQKyk`
  request(url, function(err, res, body) {
    if (err) {
      console.log(err);
    } else {
      // console.log('body', body.results.geometry.location);
      callback(JSON.parse(body).results[0].geometry.location);
    }
  });
}


module.exports = getPosition;