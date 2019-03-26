const express = require('express');

const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling user request to /users'
    })
});

router.post('/', (req, res, next) => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        phone: req.body.phone,
        email: req.body.email
    });

    user.save().then(result => {
        console.log(result);
        res.status(201).json({
            status: 201,
            result: result
        })
    }).catch((err) => {
        console.error(err)
        res.status(500).json({
            err: err
        })
    });


});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'person id is ' + id
    });
});

module.exports = router;