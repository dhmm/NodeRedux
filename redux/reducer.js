const actionsList = require('./actionsList');
const visibility = require('./visibility');

const todos =(state = { lastId : 0 , visible: visibility.ALL,  todos : [] } , action) => {
    switch (action.type)
    {
        case actionsList.ADD_TODO :
            state.lastId = state.lastId+1;
            action.todo.id = state.lastId;           
            state.todos = state.todos.concat(action.todo);
            return state;
        case actionsList.CHANGE_TODO :          
            state.todos.map( (todo , index) => {
                if(todo.id == action.todo.id) {
                  todo.title = action.todo.title;
                  todo.description = action.todo.description;
                  todo.type = action.todo.type;                               
                }
            });
            return state;
        case actionsList.DELETE_TODO :          
            let position = -1;
            state.todos.map( (todo , index) => {
                position++;                
                if(todo.id == action.todoId) {
                    state.todos.splice(position, 1);                  
                    return state;
                }
            });
            return state;
        case actionsList.COMPLETE_TODO :
            state.todos.map( (todo , index) => {
                if(todo.id === action.todoId) {
                    todo.completed = true;
                    return state;
                }
            });
            return state;
        case actionsList.UNCOMPLETE_TODO :
            state.todos.map( (todo , index) => {
                if(todo.id === action.todoId) {
                    todo.completed = false;
                    return state;
                }
            });
            return state;   
        case actionsList.SHOW_ALL :
            state.visible = visibility.ALL;
          return state;
        case actionsList.SHOW_COMPLETED :
            state.visible = visibility.COMPLETED;
          return state;
        case actionsList.SHOW_UNCOMPLETED :
            state.visible = visibility.UNCOMPLETD;
          return state;
        default:
           return state;
    }
}
module.exports = todos;