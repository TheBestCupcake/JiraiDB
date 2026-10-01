const express = require('express');
const router = express.Router();

const {getItem, getAllOrSearchedItems, uploadItem, completeUpload} = require("../controllers/itemcontroller");


//router.get(Clothes/"path", response value);
router.get("/", getAllOrSearchedItems);
router.get("/:id", getItem);
router.get("/upload", uploadItem);
router.get("/upload/:id/complete", completeUpload);


module.exports = router;