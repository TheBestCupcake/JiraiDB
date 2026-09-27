const express = require('express');
const router = express.Router();

const {getItem, getAllOrSearchedItems, uploadItem} = require("../controllers/itemcontroller");


//router.get(Clothes/"path", response value);
router.get("/", getAllOrSearchedItems);
router.get("/:id", getItem);
router.get("/upload", uploadItem);
router.get("/upload/:id/complete");


module.exports = router;