const request = require('postman-request');

// Get the api key to weatherstack
const apiKey = require('./api-keys');

let lat, long;

const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKey.weather}&query=37.8267,-122.4233&units=m`;
const weatherEncodedUrl = encodeURI(weatherUrl);

const geoUrl = `http://api.positionstack.com/v1/forward?access_key=${apiKey.geo}&query=1600 Pennsylvania Ave NW, Washington DC`;

const geoEncodedUrl = encodeURI(geoUrl);

request({ url: geoEncodedUrl, json: true }, (err, res) => {
  if (error) {
    console.error('Unable to connect to the network');
  } else if (res.body.error) {
    console.error('Unable to find location');
  } else {
    lat = res.body.data[0].latitude;
    long = res.body.data[0].longitude;
    console.log(lat, long);
  }
});

// request({ url: weatherEncodedUrl, json: true }, (err, res) => {
//   const info = res.body.current;
//   if (error) {
//     console.error('Unable to connect to the weather network');
//   } else if () {
//     console.error('Unable to find location');
//   } else {
//   console.log(
//     `The temperature right now is ${info.temperature} degrees, it feels like ${info.feelslike} and the weather is ${info.weather_descriptions}.`
//   );
//   }
// });
