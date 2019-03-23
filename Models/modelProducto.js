'use strict'

//se carga el modulo mongoose
let mongoose = require('mongoose');

let Shema = mongoose.Schema;

// Esquema de la bd
let ShemaProducto = Shema({
    nombre : String,
    descripcion : String,
    estado : String,
    imagen : String
});

//Mongoose('nombre de la coleccion','esquema de la coleccion')
module.exports = mongoose.model('producto',ShemaProducto);

