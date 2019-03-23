'use strict'

//se cargan los modulos 
let express = require('express');

//ejecutar express
let app = express();

//se carga routes
let webRoutes = require('./Routes/Web.Routes');

//middlware
app.use(express.urlencoded({extended:false}));

//Ruta
app.use('/api',webRoutes);

//exportacion de modulo y disponible en cualquier otro archivo
module.exports = app;


