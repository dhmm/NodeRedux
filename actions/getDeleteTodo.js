const redux = require('../redux');

const getDeleteTodo = (req,res) => {  
  let id = req.params.id;  
  reduxData = redux.deleteTodo(id);
  res.end(JSON.stringify(reduxData));
};

module.exports = getDeleteTodo;