const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling user request to /users'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling user post request to /users'
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'person id is ' + id
    });
});

module.exports = router;