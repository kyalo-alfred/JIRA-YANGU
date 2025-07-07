const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // XAMPP default
  database: 'webddev',
});

module.exports = pool; 