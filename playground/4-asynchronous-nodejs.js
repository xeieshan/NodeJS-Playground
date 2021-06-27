const utils = require('../utils');
const chalk = require('chalk');
//Call Stack, Callback Queue, and Event Loop

utils.log(chalk.red('Started!'));

setTimeout(() => {
    utils.log(chalk.green('2 seconds timer!'));
}, 2000)

setTimeout(() => {
    utils.log(chalk.green('0 seconds timer!'));
}, 0)

utils.log(chalk.red('Stopped!'));
