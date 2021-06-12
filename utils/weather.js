// Get postman-request
const request = require('postman-request');

// Get the api key
const apiKey = require('../api-keys');

const weather = (lat, long, callback) => {
  // set up the url for weatherstack
  const url = `http://api.weatherstack.com/current?access_key=${apiKey.weather}&query=${lat},${long}&units=m`;
  // URI encode the url
  const encodedUrl = encodeURI(url);

  // make the api call and return the result
  request({ url: encodedUrl, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Unable to get weather information', undefined);
    } else {
      callback(undefined, response.body.current);
    }
  });
};

// export the function
module.exports = weather;
