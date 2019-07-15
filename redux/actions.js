const actionsList = require('./actionsList');
const visibility = require('./visibility');

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
const getAll = ( ) => {
  return {
    type:actionsList.SHOW_ALL,
    visible:visibility.ALL
  }
}
const getCompleted = ( ) => {
  return {
    type:actionsList.SHOW_COMPLETED,
    visible:visibility.ALL
  }
}
const getUncompleted = ( ) => {
  return {
    type:actionsList.SHOW_UNCOMPLETED,
    visible:visibility.ALL
  }
}


module.exports = { addTodo , changeTodo , deleteTodo , completeTodo , uncompleteTodo , getAll  , getCompleted , getUncompleted }