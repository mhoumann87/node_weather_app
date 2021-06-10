// Get the api key to weatherstack
const apiKey = require('./api-keys');

const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=New York`;

const encodedUrl = encodeURI(url);

console.log(encodedUrl);
