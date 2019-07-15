const actions = require('express').Router();
const redux = require('./../redux');

const getActive = require('./getActive');
const getAll = require('./getAll');
const getCompleted = require('./getCompleted');

actions.get('/' ,getActive) ;
actions.get('/all' , getAll);
actions.get('/completed' , getCompleted);




actions.get('/uncompleted')
actions.get('/add')
actions.get('/change')
actions.get('/delete')
actions.get('/complete')
actions.get('/uncomplete')






module.exports = actions;