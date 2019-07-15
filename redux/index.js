const store = require('./store');
//action
const { addTodo , changeTodo , deleteTodo , completeTodo , uncompleteTodo , getAll , getCompleted , getUncompleted } = require('./actions');

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
redux.deleteTodo = (todo) => {
  store.dispatch(deleteTodo(todo));
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
redux.getActive = () => {
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.getAll = () => {
  store.dispatch(getAll());
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.getCompleted = () => {
  store.dispatch(getCompleted());
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}
redux.getUncompleted = () => {
  store.dispatch(getUncompleted());
  let reduxData = store.getState();
  let todos = reduxData.todos;
  return todos;
}

//demo data
const todoTypes = require('./todoTypes');
const { todo } = require('./components');
let todo1 = new todo('todo 1' , 'description 1' , todoTypes.EXTENSION);
let todo2 = new todo('todo 2' , 'description 2' , todoTypes.FEATURE ,true);
let todo3 = new todo('todo 3' , 'description 3' , todoTypes.BUG);
let todo4 = new todo('todo 4' , 'description 4' , todoTypes.REQUIREMENT ,true);

store.dispatch(addTodo(todo1));
store.dispatch(addTodo(todo2));
store.dispatch(addTodo(todo3));
store.dispatch(addTodo(todo4));
module.exports = redux;