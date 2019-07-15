const redux = require('../redux');

const complete = (req,res) => {
  let id = req.params.id;  
  redux.completeTodo(id);
  reduxData = redux.getActive();
  res.end(JSON.stringify(reduxData));
};

module.exports = complete;