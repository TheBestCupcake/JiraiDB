const express = require('express');
const router = express.Router();

const {getItem, getAllOrSearchedItems, getItemByCategory, uploadItem, completeUpload, getItemsFromDatabase} = require("../controllers/itemcontroller");


//router.get(Clothes/"path", response value);
router.get("/", getItemsFromDatabase);
router.get("/:id", getItem);
router.post("/upload", uploadItem);
router.post("/upload/:id/complete", completeUpload);
router.get("/:category", getItemByCategory);


module.exports = router;