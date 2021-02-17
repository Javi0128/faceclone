const express = require('express');
const app = express();
const body = require('body-parser');
const cors = require('cors');
app.use(cors())

//  Conexión a rutas
const rutas = require('./rutas/rutaPost');

const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

// BBDD Details
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:  'faceclone'
})

// Parser
app.use(body.json());

// Connect to database
mc.connect();

//RUTAS
rutas(app);



app.listen( PORT , () => {
    console.log(`Server started on port ${PORT}`);
})
