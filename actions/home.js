//File: ./actions/home.js
const conlogger = require('../common/conlogger');
conlogger('Loading home module');

const home = (req,res) => {
  res.end('Welcome to home');
}

module.exports = home;