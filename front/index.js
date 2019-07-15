const front = require('express').Router();
const config = require('../config/config');
const unirest = require('unirest');
const protocol = 'http://';

front.get('/' , (req,res) => { 
  let URL = protocol+config.host+":"+config.port+'/todos';  

  unirest.get(URL)
  .end( (response) => {    
    let data = JSON.parse(response.body); 
    res.render('home' , { show: data.visible , todos : data.todos } );  
  });
  
  
});

module.exports = front;