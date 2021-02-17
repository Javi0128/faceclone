const mysql = require('mysql');


const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:  'faceclone'
})

// Connect to database
mc.connect();

module.exports = mc;