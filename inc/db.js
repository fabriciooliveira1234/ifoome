const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'ifoome',
    password: 'password'
  });

  module.exports = connection;