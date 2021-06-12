// Get the functions
const geoCode = require('./utils/geocode');
const weather = require('./utils/weather');

geoCode('Oslo', (error, geoData) => {
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
