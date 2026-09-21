const express = require('express');
const { login, logout, isAuthed } = require('../controllers/authenticationcontroller');
const { restrict } = require('../utils/authServices');
const router = express.Router();

//router.get(Auth/'path', response value); can also do post and other requests instead of get.
router.post('/', restrict, isAuthed); //restrict used to check auth status first.
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;