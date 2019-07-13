const actionsList = require('./actionsList');

const addTodo = ( todo ) => {
    return {
        type: actionsList.ADD_TODO , 
        todo: todo
    };
 };

 module.exports = { addTodo }