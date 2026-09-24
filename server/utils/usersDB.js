const { argon2d } = require('argon2');

const pgp = require('pg-promise')();
const connection = 'postgres://postgres:FishandChips69@localhost:5432/jiraiDB';
const db = pgp(connection);

async function dbGetUserByUsername(username){
    try{
        const userObject = await db.one(`SELECT * FROM users WHERE username = '${username}'`);
        return userObject;
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}

async function dbAddUser(username, password){
    try{
        const passwordHash = await argon2.hash(password, {
            type: argon2.argon2id,
          });

        db.none(`INSERT INTO users(username, password) VALUES '${(username, passwordHash)}'`).then(() => {
            console.log("User added successfully.");
        })
    }
    catch(e){
        console.log("ERROR CAUGHT");
        console.log(e);
    }
}


module.exports = {
    dbGetUserByUsername,
    dbAddUser,
}