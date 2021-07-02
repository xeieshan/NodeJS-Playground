const utils1 = require("../utils.js");

setTimeout(() => {
  utils1.log("two seconds are up!");
}, 2000);

const names = ["Zeeshan", "James", "Jim"];
const shortName = names.filter((name) => name.length <= 4);

const geoCode = (address, callback) => {
  const data = { latitude: 0, longitude: 0 };
  callback(data);
};

geoCode("Lahore", (data) => {
  utils1.log("Returning from callback: " + JSON.stringify(data));
});
