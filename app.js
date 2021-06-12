// Get the functions
const geoCode = require('./utils/geocode');
const weather = require('./utils/weather');

const location = process.argv[2];

if (!location) {
  return console.error('Please provide a location');
}

geoCode(location, (error, geoData) => {
  if (error) {
    return console.error(error);
  }

  weather(geoData.latitude, geoData.longitude, (error, weatherData) => {
    if (error) {
      return console.error(error);
    }
    const msg = `
      The weather in ${geoData.location}, ${geoData.country} is:
      ${weatherData.weather_descriptions}, the temperature is ${weatherData.temperature} and it feels like ${weatherData.feelslike}.
    `;
    console.log(msg);
  });
});
