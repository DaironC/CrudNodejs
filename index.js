'use strict'

//libreria Mongoose
let mongoose = require('mongoose');

//requerir archivo app
let app = require("./app");

//numero del puerto la abjunto a uno
let port = 3701;

//variable que obtiene la direccion de conexion.
let link = 'mongodb://localhost:27017/DonacionBD';

mongoose.Promise = global.Promise;
mongoose.connect( link, {useNewUrlParser: true})
         .then(()=>{
             console.log("Conexion a la base de datos extablecida con exito ");
         })
         .catch((err)=>{
            console.log(err);
         });

         //Creacion del servidor 
         app.listen(port,()=>{
             console.log("Servidor Corriendo Correctamente");
             
         });