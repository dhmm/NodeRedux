const front = require('express').Router();

front.get('/' , (req,res) => { 
  res.render('home');  
});

module.exports = front;