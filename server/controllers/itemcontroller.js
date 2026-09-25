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

exports.uploadItem = async (req, res) => {
    const {title, description, category} = req.body;

    if(!title, !description, !category) {
        return res.status(400).json({
          success: false,
          message: "title description and category are required.",
      });
    }

    

}