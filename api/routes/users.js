const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.getUser);

router.post('/', userController.createNewUser);

router.get('/:id', userController.getUserById);

module.exports = router;