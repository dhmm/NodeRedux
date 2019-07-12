const dotnev = require('dotenv');
dotnev.config();


const consologger = (msg) => {
  if(process.env.MODE == 'dev') {
    console.log(msg);
  }
}
module.exports = consologger;