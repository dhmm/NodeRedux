const redux = require('../redux');

const getActive = (req,res) => {
  reduxData = redux.getActive();  
  res.end(JSON.stringify(reduxData));
};

module.exports = getActive;