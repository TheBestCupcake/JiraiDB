const {dbGetItemByID, dbGetAllItems, dbGetSearchedItems} = require("../utils/itemsDB");

exports.getItem = async (req, res) => {
    const id = req.params.id;

    itemJson = await dbGetItemByID(id);
    return res.status(200).json(itemJson);
}

exports.getAllOrSearchedItems = async (req, res) => {
    const {search} = req.query;

    if(search){
        const items = await dbGetSearchedItems(search);
        return res.status(200).json(items);
    }

    itemList = await dbGetAllItems();
    return res.status(200).json(itemList);
}