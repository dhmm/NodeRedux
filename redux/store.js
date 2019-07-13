 let { createStore } = require('redux');
//component 
const { todo } = require('./components');

 //reducer
 const todos = require('./reducer');

 //action
 const { addTodo , changeTodo , deleteTodo } = require('./actions');

//store
const store = createStore(todos);


let todo1 = new todo('todo1' , 'description1');
let todo2 = new todo('todo2' , 'description2');
let todo3 = new todo('todo3' , 'description3');
let todo4 = new todo('todo4' , 'description4');

store.dispatch(addTodo( todo1 ));
store.dispatch(addTodo( todo2 ));
store.dispatch(addTodo( todo3 ));
store.dispatch(addTodo( todo4 ));

todo2.description = "Changed todo 2";
store.dispatch(changeTodo(todo2));

store.dispatch(deleteTodo(todo3));
console.log(store.getState());