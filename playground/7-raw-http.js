const utils = require("../utils.js");
const chalk = require("chalk");
const http = require("http");

let url =
  "http://api.weatherstack.com/current?access_key=fa87e7737367e2dc0f1f671843d6bdce&units=f&query=31.497754%2C74.360106";
utils.log("URL WeatherStack: " + url);
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    utils.log(data);
    const body = JSON.parse(data);
    if (body === undefined) {
      utils.log(
        chalk.red(
          "Error occurred! Something went wrong while querying your request on WeatherStack!"
        )
      );
    } else {
      utils.log(chalk.green(body));
    }
  });
});
request.on("error", (error) => {
  utils.log(chalk.red(error.message));
});
request.end();
