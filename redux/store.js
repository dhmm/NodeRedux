 let { createStore } = require('redux');


 //reducer
 const counter = require('./reducer');

 //action
 const { increment } = require('./actions');

 //store
 const store = createStore(counter);

 store.dispatch(increment());
 store.dispatch(increment());
 store.dispatch(increment());
 store.dispatch(increment());


 console.log(store.getState());