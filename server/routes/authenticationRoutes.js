const express = require('express');
const { login, logout } = require('../controllers/authenticationcontroller');
const router = express.Router();

//router.get(Auth/'path', response value);
router.get('/login', login);
router.get('/logout', logout);

module.exports = router;