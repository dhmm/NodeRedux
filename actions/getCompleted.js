const redux = require('../redux');

const getCompleted = (req,res) => {
  reduxData = redux.getCompleted();
  res.end(JSON.stringify(reduxData));
};

module.exports = getCompleted;