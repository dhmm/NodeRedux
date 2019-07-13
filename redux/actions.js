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
const completeTodo = ( todoId ) => {
    return {
        type:actionsList.COMPLETE_TODO,
        todoId:todoId
    }
}
const uncompleteTodo = ( todoId ) => {
    return {
        type:actionsList.UNCOMPLETE_TODO,
        todoId:todoId
    }
}
 module.exports = { addTodo , changeTodo , deleteTodo , completeTodo , uncompleteTodo}