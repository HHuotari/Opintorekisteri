const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'userpass',
  database: 'arvdb'
});
module.exports = connection;