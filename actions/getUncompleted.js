const redux = require('../redux');

const getUncompleted = (req,res) => {
  reduxData = redux.getUncompleted();
  res.end(JSON.stringify(reduxData));
};

module.exports = getUncompleted;