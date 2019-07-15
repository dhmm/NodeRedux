const redux = require('../redux');

const showUncompleted = (req,res) => {
  reduxData = redux.showUncompleted();
  res.end(JSON.stringify(reduxData));
};

module.exports = showUncompleted;