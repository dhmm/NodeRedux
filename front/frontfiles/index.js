const path = require('path');
const frontFiles = require('express').Router();

frontFiles.get('/' , (req,res) => { 
  res.status(404).end('Not found');
});

let assets  = '../../front/public/assets/';


frontFiles.get('/main.js' , (req,res)=> { 
  res.sendFile(path.join(__dirname , assets+'js/main.js'));
});

module.exports = frontFiles;