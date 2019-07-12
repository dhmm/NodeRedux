const actions = require('express').Router();

const home = require('./home');

actions.get('/' , home) ;

module.exports = actions;