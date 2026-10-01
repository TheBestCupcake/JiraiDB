const {dbGetItemByID, dbGetAllItems, dbGetSearchedItems, dbAddPendingItem} = require("../utils/itemsDB");
const { putUrl } = require("../utils/r2Services");

exports.getItem = async (req, res) => {
    const id = req.params.id;

    const itemJson = await dbGetItemByID(id);
    return res.status(200).json(itemJson);
}

exports.getAllOrSearchedItems = async (req, res) => {
    const {search} = req.query;

    if(search){
        const items = await dbGetSearchedItems(search);
        return res.status(200).json(items);
    }

    const itemList = await dbGetAllItems();
    return res.status(200).json(itemList);
}

exports.uploadItem = async (req, res) => {
    const {title, description, category, fileType} = req.body;

    if(!title, !description, !category, !fileType) {
        return res.status(400).json({
          success: false,
          message: "title description and category are required.",
      });
    }

    const presignedURL = putUrl(title, fileType);
    
    await dbAddPendingItem(title, description, presignedURL, category);

    return res.status(200).json({
        success: true,
        url: presignedURL,
    });


}