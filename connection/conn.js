'use-strict'
// testando
const sql = require('mssql');
const config = require('../configs/db.js');

const poolConnection = new sql.ConnectionPool(config).connect().then(poolconn =>{
    console.log('Connection has success');
    return poolconn;
}).catch(err => console.log('The connection is not possible :'+err));


module.exports = {
    sql, poolConnection
}

