'use strict'

//se carga el modulo mongoose
let mongoose = require('mongoose');

let Shema = mongoose.Schema;
// Esquema de la bd


let ShemaUsuario = Shema({
    usuario : String,
    clave : String
});

//Mongoose('nombre de la coleccion','esquema de la coleccion')
module.exports = mongoose.model('Usuario',ShemaUsuario);

