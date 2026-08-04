const {dbGetItemByID, dbGetAllItems} = require("../utils/itemsDB");

exports.getItem = async (req, res) => {
    const id = req.params.id;

    itemJson = await dbGetItemByID(id);
    return res.status(200).json(itemJson);
}

exports.getAllItems = async (req, res) => {
    itemList = await dbGetAllItems();
    return res.status(200).json(itemList);
}