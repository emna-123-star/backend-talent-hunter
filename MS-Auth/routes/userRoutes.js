const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/addUser', userController.addUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.put('/editUser/:id', userController.editUser);
router.put('/blockUser/:id', userController.blockUser);
router.post('/login', userController.login);

module.exports = router;
