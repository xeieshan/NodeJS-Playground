const fs = require("fs");
const utils = require("./utils.js");
const sum = utils.add(1, 4);
fs.writeFileSync("notes.txt", "My name is Zeeshan.");
fs.appendFileSync("notes.txt", "\nBro!!");
fs.appendFileSync("notes.txt", "\nNah!!");
console.log(sum);
const validator = require('validator');
const chalk = require("chalk");
utils.log(chalk.green.bgWhite.bold.inverse("Test"));

utils.log(chalk.blue.inverse('isEmail: ' + validator.isEmail('ss@ss.com')));
utils.log(chalk.red('isUrl: ' + validator.isURL('http:test.com')));

