const express = require('express');
const router = express.Router();

const {getItem} = require("../controllers/itemcontroller");


//router.get(Clothes/"path", response value);
router.get("/:id", getItem);


module.exports = router;