const express = require('express');
const app = express();
const logger = require('morgan');

const userRoutes = require('./api/routes/users');

app.use(logger('dev'));
app.use('/users', userRoutes);
module.exports = app;