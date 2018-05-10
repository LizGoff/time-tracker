var pg = require('pg');
const Pool = require('pg').Pool;

var config = {
    database: 'time_tracker',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on('connect', (client) => {
    console.log('posgresql connected!');
});

pool.on('error', (err, client) => {
    console.log('Unexpected Error connecting to Postgresql', err);
    process.exit(-1);
});

module.exports = pool;