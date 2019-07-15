const actions = require('express').Router();
var multer = require('multer');
var upload = multer();

const getActive = require('./getActive');
const getAll = require('./getAll');
const getCompleted = require('./getCompleted');
const getUncompleted = require('./getUncompleted');
const getDeleteTodo = require('./getDeleteTodo');
const postAdd = require('./postAdd');

actions.get('/' ,getActive) ;
actions.get('/all' , getAll);
actions.get('/completed' , getCompleted);
actions.get('/uncompleted' , getUncompleted );
actions.get('/delete/:id' , getDeleteTodo );
actions.post('/add'  , upload.array() , postAdd);

actions.get('/change')

actions.get('/complete')
actions.get('/uncomplete')






module.exports = actions;