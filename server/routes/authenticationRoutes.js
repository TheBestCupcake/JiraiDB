const express = require('express');
const { login, logout } = require('../controllers/authenticationcontroller');
const router = express.Router();

//router.get(Auth/'path', response value); can also do post and other requests instead of get.
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;