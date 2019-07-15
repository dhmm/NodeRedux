 let { createStore } = require('redux');
//component 
const { todo } = require('./components');

 //reducer
 const todos = require('./reducer');

//store
const store = createStore(todos);

module.exports = store;