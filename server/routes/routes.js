const express = require('express');
const router = express.Router();

const {getItem} = require("../controllers/itemcontroller");


//router.get("path", response value);
router.get("/", getItem);


module.exports = router;