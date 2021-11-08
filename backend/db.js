const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ksdotcom',
    password: 'p0126728ond',
    port: '5432',
})

module.exports = pool