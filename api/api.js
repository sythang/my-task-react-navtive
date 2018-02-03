import React from "react";
var axios = require('axios');
import base64 from 'base-64';
import {AsyncStorage} from "react-native";
var axiosInstance = axios.create({
  baseURL: 'https://vinova.unfuddle.com/api/v1',
  /* other custom settings */
});

// AsyncStorage.getItem("access_token").then(value =>
//   var value = value;
// );
AsyncStorage.getItem("access_token").then(value => {
    console.log("value");
    console.log(value);
  }).then(res => {
    console.log("res");
    console.log(res);
  });

var username = "julian";
var password = "sythang";
encodeData = base64.encode(`${username}:${password}`);
axiosInstance.defaults.headers.common['Authorization'] = `Basic ${encodeData}`;
module.exports = axiosInstance;