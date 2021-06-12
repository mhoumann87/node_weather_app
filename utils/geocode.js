// Get postman-request
const request = require('postman-request');

// get the api key
const apiKey = require('../api-keys');

const geoCode = (address, callback) => {
  // set up the url
  const url = `http://api.positionstack.com/v1/forward?access_key=${apiKey.geo}&query=${address}`;

  // URI encode the url
  const encodedUrl = encodeURI(url);

  // Get the location info from positionstack and return it
  request({ url: encodedUrl, json: true }, (error, response) => {
    //console.log(response.body.data[0]);
    if (error) {
      callback('Unable to connect to location services.', undefined);
    } else if (!response.body.data[0]) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        location: response.body.data[0].name,
        country: response.body.data[0].country,
      });
    }
  });
};

// Export the function to use in other files
module.exports = geoCode;
