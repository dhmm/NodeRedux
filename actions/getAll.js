const redux = require('../redux');

const getAll = (req,res) => {
  reduxData = redux.getAll();
  res.end(JSON.stringify(reduxData));
};

module.exports = getAll;