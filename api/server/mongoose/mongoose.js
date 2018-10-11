const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://<root>:<root123>@ds125683.mlab.com:25683/nodejs-api');

module.exports = { mongoose };