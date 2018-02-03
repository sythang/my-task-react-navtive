var axios = require('axios');
import base64 from 'base-64'

var axiosInstance = axios.create({
  baseURL: 'https://vinova.unfuddle.com/api/v1',
  /* other custom settings */
});

var username = "julian";
var password = "sythang";
encodeData = base64.encode(`${username}:${password}`);
axiosInstance.defaults.headers.common['Authorization'] = `Basic ${encodeData}`;
module.exports = axiosInstance;