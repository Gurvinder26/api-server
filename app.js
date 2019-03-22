const express = require('express');
const app = express();
const logger = require('morgan');

const userRoutes = require('./api/routes/users');

// logger
app.use(logger('dev'));

// Routes to handle requests
app.use('/users', userRoutes);


app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status= 404;
    next(err);
})

app.use((err, req, res, next) => {

    res.status(err.status || 500);
    res.json({
        error:{
            message: err.message
        }
    })
})

module.exports = app;