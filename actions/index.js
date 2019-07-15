const actions = require('express').Router();

const getActive = require('./getActive');
const getAll = require('./getAll');
const getCompleted = require('./getCompleted');
const getUncompleted = require('./getUncompleted');

actions.get('/' ,getActive) ;
actions.get('/all' , getAll);
actions.get('/completed' , getCompleted);
actions.get('/uncompleted' , getUncompleted );


actions.get('/add')
actions.get('/change')
actions.get('/delete')
actions.get('/complete')
actions.get('/uncomplete')






module.exports = actions;