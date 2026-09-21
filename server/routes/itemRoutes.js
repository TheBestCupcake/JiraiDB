const express = require('express');
const router = express.Router();

const {getItem, getAllOrSearchedItems} = require("../controllers/itemcontroller");


//router.get(Clothes/"path", response value);
router.get("/", getAllOrSearchedItems);
router.get("/:id", getItem);


module.exports = router;