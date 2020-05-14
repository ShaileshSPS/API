const { createPool } = require("mysql"); // specific object calling

const pool = createPool({
    port : process.env.DB_POST,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.MYSQL_DB,
    connectionLimit: 10
});

module.exports = pool;