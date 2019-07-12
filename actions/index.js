const conlogger = require('../common/conlogger');
conlogger('Loading actions module');

const actions = require('express').Router();

const home = require('./home');

actions.get('/' , home) ;

module.exports = actions;