const store = require('./store');
//action
const { addTodo , changeTodo , deleteTodo , completeTodo , uncompleteTodo , getTodo , getAll , getCompleted , getUncompleted } = require('./actions');

const redux = {}

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

module.exports = redux;