const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/users');

// logger
app.use(logger('dev'));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//headers for the req
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res, header(
        'Access-Control-Allow-hearders',
        'Orgin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

// Routes to handle requests
app.use('/users', userRoutes);


app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {

    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
})

module.exports = app;