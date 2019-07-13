const actionsList = require('./actionsList');

const counter =(state = { lastId : 0 , todos : [] } , action) => {
    switch (action.type)
    {
        case actionsList.ADD_TODO :
            state.lastId = state.lastId+1;
            action.todo.id = state.lastId;           
            state.todos = state.todos.concat(action.todo);
            return state;
        case actionsList.CHANGE_TODO :
            state.todos.map( (todo , index) => {
                if(todo.id === action.todo.id) {
                    todo = action.todo;
                }
            });
            return state;
        case actionsList.DELETE_TODO :
            let position = -1;
            state.todos.map( (todo , index) => {
                position++;
                if(todo.id === action.todo.id) {
                    state.todos.splice(position, 1);
                    return state;
                }
            });
            return state;
        default:
           return state;
    }
}
module.exports = counter;