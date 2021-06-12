// Get the functions
const geoCode = require('./utils/geocode');
const weather = require('./utils/weather');

geoCode('Oslo', (error, data) => {
  console.log(error, data);
});

weather('59.974453', '10.735045', (error, data) => {
  console.log(error);
  console.log(data);
});
