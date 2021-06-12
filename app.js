const request = require('postman-request');

// Get the api key to weatherstack
const apiKey = require('./api-keys');
const geoCode = require('./utils/geocode');

const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKey.weather}&query=37.8267,-122.4233&units=m`;
const weatherEncodedUrl = encodeURI(weatherUrl);

// request({ url: weatherEncodedUrl, json: true }, (err, res) => {
//   const info = res.body.current;
//   if (err) {
//     console.error('Unable to connect to the weather network');
//   } else if (res.error) {
//     console.error('Unable to find location');
//   } else {
//     console.log(
//       `The temperature right now is ${info.temperature} degrees, it feels like ${info.feelslike} and the weather is ${info.weather_descriptions}.`
//     );
//   }
// });

geoCode('Herlufmagle', (error, data) => {
  console.log(error, data);
});
