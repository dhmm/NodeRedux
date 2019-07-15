const redux = require('../redux');

const uncomplete = (req,res) => {
  let id = req.params.id;  
  redux.uncompleteTodo(id);
  reduxData = redux.getActive();
  res.end(JSON.stringify(reduxData));
};

module.exports = uncomplete;