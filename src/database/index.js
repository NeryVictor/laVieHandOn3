const Sequelize = require('sequelize');

const DB_NAME = 'lavie5';
const DB_USER = 'root';
const DB_PASS = 'root';
const DB_CONFIG =  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

// //object to storage db connection 
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error on attempting connection to database!");
    console.log(error);
};

async function hasConection() {
    try {
        await db.authenticate();
        console.log("Database connected!");
    } catch (error) {
        console.error("Error on database authentication!");
    };
};

Object.assign(db, {
    hasConection,
});

module.exports = db;