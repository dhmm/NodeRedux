const redux = require('../redux');

const showAll = (req,res) => {
  reduxData = redux.showAll();
  res.end(JSON.stringify(reduxData));
};

module.exports = showAll;