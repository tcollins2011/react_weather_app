import axios from "axios";
const weatherKey = process.env.REACT_APP_WEATHERBIT_KEY;

export default {
  getWeather: function (location) {
    // return a promise obj so we can tack on the .then and .catch when we need them
    return axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&days=7&units=I&key=${weatherKey}
      `
    );
  },
};
