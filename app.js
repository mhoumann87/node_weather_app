const request = require('postman-request');

// Get the api key to weatherstack
const apiKey = require('./api-keys');

const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=Copenhagen`;
const encodedUrl = encodeURI(url);

request({ url: encodedUrl }, (err, res) => {
  console.log(res);
});
