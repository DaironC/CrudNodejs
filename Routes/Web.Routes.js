'use strict'

//importar el controlador
let UsuarioController = require('../Controllers/UsuarioControllers');
let ProductoController = require('../Controllers/ProductoControllers');

//importo el modulo de express
let express = require('express');

//metodo router de express
let router = express.Router();

//crear una ruta segun el metodo a utilizar

//USUARIOS
router.get('/login',UsuarioController.login);
router.get('/list-usuario',UsuarioController.getUsuario);
//listar Usuarios
router.get('/list-usuarios',UsuarioController.getUsuarios)
//Guardar Usuario
router.post('/save-usuario/',UsuarioController.saveUsuario);
//Actualizar Usuario
router.put('/update-usuario/:id',UsuarioController.updateUsuario);
//Eliminar Usuario
router.delete('/delete-usuario/:id',UsuarioController.deleteUsuario);

//Productos
router.get('/producto',ProductoController.producto);
router.post('/save-producto',ProductoController.saveProducto);
router.get('/list-producto',ProductoController.getProductos);
router.put('/update-producto/:id',ProductoController.updateProducto);
router.delete('/delete-producto/:id',ProductoController.deleteProducto);
router.get('/list-productos',ProductoController.getProductos);



module.exports = router;