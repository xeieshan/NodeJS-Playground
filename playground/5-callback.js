const utils = require("../utils.js");
const chalk = require("chalk");

setTimeout(() => {
  utils.log("two seconds are up!");
}, 2000);

const names = ["Zeeshan", "James", "Jim"];
const shortName = names.filter((name) => name.length <= 4);

const geoCode = (address, callback) => {
  const data = { latitude: 0, longitude: 0 };
  callback(data);
};

geoCode("Lahore", (data) => {
  utils.log(chalk.red("Returning from callback: " + JSON.stringify(data)));
});

const add = (x, y, callback) => {
  setTimeout(() => {
    utils.log("three seconds are up!");
    callback(x + y);
  }, 3000);
};

add(1, 2, (sum) => {
  utils.log(chalk.blue("Sum is: " + sum));
});
