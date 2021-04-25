// run: node app.js
const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=b5bd1da29d2810fe6b42915e8e10f5df&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  //   console.log("response: ", response);
  console.log("error: ", error);

  const data = JSON.parse(response.body);
  console.log("current data: ", data.current);
});
