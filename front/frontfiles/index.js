const path = require('path');
const frontFiles = require('express').Router();

frontFiles.get('/' , (req,res) => { 
  res.status(404).end('Not found');
});

let assets  = '../../front/public/assets/';

frontFiles.get('/materialize.min.css' , (req,res)=> { 
  res.sendFile(path.join(__dirname , assets+'materialize/css/materialize.min.css'));
});

frontFiles.get('/materialize.min.js' , (req,res)=> { 
  res.sendFile(path.join(__dirname , assets+'materialize/js/materialize.min.js'));
});
module.exports = frontFiles;