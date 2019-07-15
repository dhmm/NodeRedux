const redux = require('../redux');

const postChange = (req,res) => {  
  let todo = req.body;    
  redux.changeTodo(todo);
  reduxData = redux.getActive();
  res.end(JSON.stringify(reduxData));
};

module.exports = postChange;