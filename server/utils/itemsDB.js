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
        const itemList = await db.any(`SELECT * FROM testtable WHERE id ILIKE '%${query}%'`, [true]);
        return itemList;
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}

async function dbAddPendingItem(title, description, imgPath, category){
    try{
        db.none(`INSERT INTO testtable VALUES ($1, $2, $3, $4)`, [title, description, imgPath, category]).then(() => {
            console.log("Successfully added image");
        })
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}

async function dbCompletePendingItem(title){
    try{
        await db.none(`UPDATE testtable SET status = $1 WHERE id = $2`, ['completed', title]);
    }
    catch(e){
        console.log("Error Caught");
        console.log(e);
    }
}

module.exports = {
    dbGetItemByID,
    dbGetAllItems,
    dbGetSearchedItems,
    dbAddPendingItem,
    dbCompletePendingItem,
}