const {dbGetItemByID} = require("../utils/itemsDB");

exports.getItem = async (req, res) => {
    //Temp id is testid. do actual parsing from req uri later.
    const id = "testid";

    itemJson = await dbGetItemByID(id);
    return res.status(200).json(itemJson);
}