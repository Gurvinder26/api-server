const express = require('express');

const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {

    User.find()
        .select('firstName lastName')
        .exec()
        .then((users) => {
            console.log(users);
            res.status(200).json({
                count: users.length,
                result: users
            });
        }).catch((err) => {

            res.status(500).json({
                err: err
            });
        });

});

router.post('/', (req, res, next) => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address
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
    const email = req.params.id;

    User.find().where('email', email)
        .select('firstName lastName')
        .exec()
        .then((user) => {
            res.status(200).json({
                result: user
            });
        }).catch((err) => {

            res.status(500).json({
                err: err
            });
        });
});

module.exports = router;