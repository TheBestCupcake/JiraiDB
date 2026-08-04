const pgp = require('pg-promise')();
const connection = 'postgres://postgres:FishandChips69@localhost:5432/jiraiDB';
const db = pgp(connection);

async function dbGetItemByID(id){
    try{
        const itemObject = await db.one(`SELECT * FROM testtable WHERE id = '${id}'`);
        return itemObject;
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}

async function dbGetAllItems(){
    try{
        const itemList = await db.any(`SELECT * FROM testtable`, [true]);
        return itemList;
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}

async function dbGetSearchedItems(query){
    try{
        const itemList = await db.any(`SELECT * FROM testtable WHERE id = '${query}'`, [true]);
        return itemList;
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}


module.exports = {
    dbGetItemByID,
    dbGetAllItems,
    dbGetSearchedItems,
}