const actionsList = require('./actionsList');

const counter =(state = { lastId : 0 , todos : [] } , action) => {
    switch (action.type)
    {
        case actionsList.ADD_TODO :
            state.lastId = state.lastId+1;
            action.todo.id = state.lastId;           
            state.todos = state.todos.concat(action.todo);
            return state;
        default:
           return state;
    }
}
module.exports = counter;