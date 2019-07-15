const redux = require('../redux');

const showCompleted = (req,res) => {
  reduxData = redux.showCompleted();
  res.end(JSON.stringify(reduxData));
};

module.exports = showCompleted;