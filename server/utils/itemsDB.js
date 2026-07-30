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


module.exports = {
    dbGetItemByID,
}