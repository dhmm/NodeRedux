const redux = require('../redux');

const getAdd = (req,res) => {
  let todo = req.body;  
  redux.addTodo(todo);
  reduxData = redux.getActive();
  res.end(JSON.stringify(reduxData));
};

module.exports = getAdd;