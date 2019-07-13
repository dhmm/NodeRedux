const actionsList = require('./actionsList');

const addTodo = ( todo ) => {
    return {
        type: actionsList.ADD_TODO , 
        todo: todo
    };
 };
const changeTodo = ( todo ) => {
    return {
        type:actionsList.CHANGE_TODO,
        todo: todo
    }
}
const deleteTodo = ( todo ) => {
    return {
        type:actionsList.DELETE_TODO,
        todo : todo
    }
}
 module.exports = { addTodo , changeTodo , deleteTodo }