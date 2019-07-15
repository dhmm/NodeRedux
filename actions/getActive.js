const redux = require('../redux');

const getActive = (req,res) => {
  reduxData = redux.getActive();
  console.log(reduxData);
  res.end(JSON.stringify(reduxData));
};

module.exports = getActive;