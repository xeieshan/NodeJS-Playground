const utils = require('../utils.js')
// Object property shorthand
const name = 'Zeeshan'
const age = 22

const user = {
    name,
    age,
    location: 'London'
}
utils.log(user);

// Object destructuring

const user1 = {
    name: 'Zeeshan',
    age: 11,
    location: 'London, GB'
}

const {name: userName, age: userAge, location, rating = 2121} = user1;
utils.log(userName);
utils.log(userAge);
utils.log(location);
utils.log(rating);

const transaction = (transactionType, {name, age}) => {
    utils.log(transactionType);
    utils.log(name);
    utils.log(age);    
}
transaction('order',user1)