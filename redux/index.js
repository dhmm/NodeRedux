const store = require('./store');
//action
const { addTodo , changeTodo , deleteTodo , completeTodo , uncompleteTodo , showAll , showCompleted , showUncompleted } = require('./actions');

const redux = {}

redux.addTodo = (todo) => {
  store.dispatch(addTodo(todo));
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.changeTodo = (todo) => {
  store.dispatch(changeTodo(todo));
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.deleteTodo = (todoId) => {  
  store.dispatch(deleteTodo(todoId));
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.completeTodo = (todoId) => {
  store.dispatch(completeTodo(todoId));
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.uncompleteTodo = (todoId) => {
  store.dispatch(uncompleteTodo(todoId));
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.getTodo = (id) => {
  let state = store.getState();
  let todos = state.todos;  
  let returnData = null;
  todos.forEach( (todo, index) => {    
    if(id == todo.id)
    {
      returnData = todo;
    }
  });
  return returnData;
}
redux.getActive = () => {
  let reduxData = store.getState();
  let todos = reduxData;
  return todos;
}
redux.showAll = () => {
  store.dispatch(showAll());
  let reduxData = store.getState();
  let todos = reduxData;
  return todos;
}
redux.showCompleted= () => {
  store.dispatch(showCompleted());
  let reduxData = store.getState();
  let todos = reduxData;
  return todos;
}
redux.showUncompleted= () => {
  store.dispatch(showUncompleted());
  let reduxData = store.getState();
  let todos = reduxData;
  return todos;
}

//demo data
const todoTypes = require('./todoTypes');
const { todo } = require('./components');
let todo1 = new todo('todo 1' , 'description 1' , todoTypes.EXTENSION);
let todo2 = new todo('todo 2' , 'description 2' , todoTypes.FEATURE );
let todo3 = new todo('todo 3' , 'description 3' , todoTypes.BUG);
let todo4 = new todo('todo 4' , 'description 4' , todoTypes.REQUIREMENT );

store.dispatch(addTodo(todo1));
store.dispatch(addTodo(todo2));
store.dispatch(addTodo(todo3));
store.dispatch(addTodo(todo4));
module.exports = redux;