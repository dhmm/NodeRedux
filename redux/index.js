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

module.exports = redux;