const database = require('./.sqlite3');
const knex = require('knex');

const db = knex(database);

module.exports = db;