const redux = require('express').Router();

redux.get('/' , (req,res) => {
    require('./store')
    res.end('redux is here');
})

module.exports = redux;