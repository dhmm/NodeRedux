const actions = require('express').Router();
var multer = require('multer');
var upload = multer();

const getActive = require('./getActive');
const getAll = require('./getAll');
const getCompleted = require('./getCompleted');
const getUncompleted = require('./getUncompleted');
const getDeleteTodo = require('./getDeleteTodo');
const postAdd = require('./postAdd');
const getTodo = require('./getTodo');
const postChange = require('./postChange');
const complete = require('./complete');
const uncomplete = require('./uncomplete');

actions.get('/' ,getActive) ;
actions.get('/all' , getAll);
actions.get('/completed' , getCompleted);
actions.get('/uncompleted' , getUncompleted );
actions.get('/delete/:id' , getDeleteTodo );
actions.post('/add'  , upload.array() , postAdd);
actions.get('/todo/:id' , getTodo);
actions.post('/change'  , upload.array() , postChange);
actions.get('/complete/:id'  ,complete );
actions.get('/uncomplete/:id' ,uncomplete );






module.exports = actions;