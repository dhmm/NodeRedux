const dotnev = require('dotenv');
dotnev.config();

const config = {}
config.host = process.env.HOST || '127.0.0.1';
config.port = process.env.PORT || '8000';

module.exports = config;