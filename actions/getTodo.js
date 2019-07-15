const redux = require('../redux');

const getTodo = (req,res) => {
  let id = req.params.id;
  let todo = redux.getTodo(id);
  res.end(JSON.stringify(todo));
};

module.exports = getTodo;